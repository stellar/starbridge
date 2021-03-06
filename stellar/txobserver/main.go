package txobserver

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/hex"
	"net/http"
	"time"

	"github.com/ethereum/go-ethereum/common"

	"github.com/pkg/errors"
	"github.com/stellar/go/clients/horizonclient"
	"github.com/stellar/go/protocols/horizon"
	"github.com/stellar/go/protocols/horizon/operations"
	slog "github.com/stellar/go/support/log"
	"github.com/stellar/go/toid"
	"github.com/stellar/starbridge/store"
)

type Observer struct {
	bridgeAccount string

	client *horizonclient.Client
	store  *store.DB
	log    *slog.Entry

	ledgerSequence uint32
	catchup        bool
}

func NewObserver(
	bridgeAccount string,
	client *horizonclient.Client,
	store *store.DB,
) *Observer {
	o := &Observer{
		bridgeAccount: bridgeAccount,
		client:        client,
		store:         store,
		log:           slog.DefaultLogger.WithField("service", "stellar_txobserver"),
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	ledgerSeq, err := o.store.GetLastLedgerSequence(ctx)
	if err != nil {
		o.log.Fatalf("Unable to load last ledger sequence from db: %v", err)
	}

	if ledgerSeq == 0 {
		// Perform catchup on the first call to ProcessNewLedgers
		o.catchup = true
	} else {
		o.ledgerSequence = ledgerSeq
	}

	return o
}

func (o *Observer) ProcessNewLedgers(ctx context.Context) {
	for ctx.Err() == nil {
		if o.catchup {
			err := o.catchupLedgers(ctx)
			if err != nil {
				o.log.WithFields(slog.F{"error": err}).Error("Error catching up")
			} else {
				o.catchup = false
			}
		} else {
			// Get ledger data first to ensure there are no gaps
			ledger, err := o.client.LedgerDetail(o.ledgerSequence)
			if err != nil {
				if herr, ok := err.(*horizonclient.Error); ok && herr.Response.StatusCode == http.StatusNotFound {
					// Ledger not found means we reached the latest ledger
					return
				} else {
					o.log.WithField("error", err).Error("Error getting ledger details")
				}
			} else {
				o.log.WithField("sequence", o.ledgerSequence).Info("Processing ledger...")

				err = o.ingestLedger(ctx, ledger)
				if err != nil {
					o.log.WithFields(slog.F{"error": err, "sequence": o.ledgerSequence}).Error("Error processing a single ledger details")
				} else {
					o.ledgerSequence++
					continue // without time.Sleep
				}
			}
		}
		time.Sleep(time.Second)
	}
}

func (o *Observer) catchupLedgers(ctx context.Context) error {
	root, err := o.client.Root()
	if err != nil {
		o.log.Fatalf("Unable to access Horizon (%s) root resource: %v", o.client.HorizonURL, err)
	}

	ledgerSeq := root.HorizonSequence

	o.log.Infof("Catching up to ledger %d", ledgerSeq)

	err = o.store.Session.Begin()
	if err != nil {
		return errors.Wrap(err, "error starting a transaction")
	}

	defer func() {
		_ = o.store.Session.Rollback()
	}()

	// Process past bridge account payments
	cursor := toid.AfterLedger(ledgerSeq).String()
	var lastOp operations.Operation
	for ctx.Err() == nil {
		ops, err := o.client.Payments(horizonclient.OperationRequest{
			ForAccount:    o.bridgeAccount,
			Cursor:        cursor,
			Order:         horizonclient.OrderDesc,
			Limit:         200,
			IncludeFailed: false,
			Join:          "transactions",
		})
		if err != nil {
			return errors.Wrap(err, "error getting operations")
		}

		if len(ops.Embedded.Records) == 0 {
			break
		}

		err = o.ingestPage(ctx, ops.Embedded.Records)
		if err != nil {
			return err
		}

		lastOp = ops.Embedded.Records[len(ops.Embedded.Records)-1]
		cursor = lastOp.PagingToken()
	}

	if ctx.Err() != nil {
		return ctx.Err()
	}

	// At this point we reached the beginning of account history. Ensure the
	// first op is creating it.
	if createAccountOp, ok := lastOp.(operations.CreateAccount); !(ok && createAccountOp.Account == o.bridgeAccount) {
		o.log.Fatal("Reached the end of history but operation creating bridge account not found")
	}

	// Update sequence number to the ledgerSeq-1
	// Ledger close time will be updated after returning to ProcessNewLedgers.
	err = o.store.UpdateLastLedgerSequence(ctx, uint32(ledgerSeq)-1)
	if err != nil {
		return errors.Wrap(err, "error updating last ledger sequence")
	}

	err = o.store.Session.Commit()
	if err != nil {
		return errors.Wrap(err, "error commiting a transaction")
	}

	o.ledgerSequence = uint32(ledgerSeq)

	return nil
}

func (o *Observer) ingestLedger(ctx context.Context, ledger horizon.Ledger) error {
	err := o.store.Session.Begin()
	if err != nil {
		return errors.Wrap(err, "error starting a transaction")
	}
	defer func() {
		// explicitly ignore return value to make the linter happy
		_ = o.store.Session.Rollback()
	}()
	// Process operations
	cursor := ""
	for {
		ops, err := o.client.Payments(horizonclient.OperationRequest{
			ForLedger:     uint(ledger.Sequence),
			Cursor:        cursor,
			Limit:         200,
			IncludeFailed: false,
			Join:          "transactions",
		})
		if err != nil {
			return errors.Wrap(err, "error getting operations")
		}

		if len(ops.Embedded.Records) == 0 {
			break
		}

		err = o.ingestPage(ctx, ops.Embedded.Records)
		if err != nil {
			return err
		}

		lastOp := ops.Embedded.Records[len(ops.Embedded.Records)-1].GetBase()
		cursor = lastOp.PagingToken()
	}

	err = o.store.UpdateLastLedgerSequence(ctx, uint32(ledger.Sequence))
	if err != nil {
		return errors.Wrap(err, "error updating last ledger sequence")
	}

	err = o.store.UpdateLastLedgerCloseTime(ctx, ledger.ClosedAt)
	if err != nil {
		return errors.Wrap(err, "error updating last ledger sequence")
	}

	err = o.store.Session.Commit()
	if err != nil {
		return errors.Wrap(err, "error commiting a transaction")
	}

	o.log.WithField("sequence", ledger.Sequence).Info("Processed ledger")
	return nil
}

func validTransaction(horizonTx *horizon.Transaction) bool {
	// ignore failed transactions
	return horizonTx.Successful &&
		// Skip inserting transactions with multiple ops. Currently Starbridge
		// does not create such transactions but it can change in the future.
		horizonTx.OperationCount == 1
}

func (o *Observer) ingestPage(ctx context.Context, ops []operations.Operation) error {
	for _, op := range ops {
		payment, ok := op.(operations.Payment)
		// only consider payment operations
		if !ok {
			continue
		}

		tx := payment.Transaction
		if !validTransaction(tx) {
			continue
		}

		if payment.From == o.bridgeAccount {
			if err := o.ingestOutgoingPayment(ctx, payment); err != nil {
				return err
			}
		} else if payment.To == o.bridgeAccount {
			if err := o.ingestIncomingPayment(ctx, payment); err != nil {
				return err
			}
		}
	}

	return nil
}

func (o *Observer) ingestOutgoingPayment(ctx context.Context, payment operations.Payment) error {
	if payment.Transaction.MemoType != "hash" || payment.Transaction.Memo == "" {
		return nil
	}

	memoBytes, err := base64.StdEncoding.DecodeString(payment.Transaction.Memo)
	if err != nil {
		return errors.Wrapf(err, "error decoding memo: %s", payment.Transaction.Memo)
	}

	err = o.store.InsertHistoryStellarTransaction(ctx, store.HistoryStellarTransaction{
		Hash:     payment.Transaction.Hash,
		Envelope: payment.Transaction.EnvelopeXdr,
		MemoHash: hex.EncodeToString(memoBytes),
	})
	if err != nil {
		return errors.Wrapf(err, "error inserting history transaction: %s", payment.Transaction.Hash)
	}

	return nil
}

func (o *Observer) ingestIncomingPayment(ctx context.Context, payment operations.Payment) error {
	var assetString string
	if payment.Asset.Type == "native" {
		assetString = "native"
	} else {
		assetString = payment.Asset.Code + ":" + payment.Asset.Issuer
	}

	var destinationAddress string
	memoBytes, err := base64.StdEncoding.DecodeString(payment.Transaction.Memo)
	if err == nil && bytes.Equal(common.BytesToAddress(memoBytes).Hash().Bytes(), memoBytes) {
		destinationAddress = common.BytesToAddress(memoBytes).String()
	}

	deposit := store.StellarDeposit{
		ID:          payment.Transaction.Hash,
		Asset:       assetString,
		LedgerTime:  payment.LedgerCloseTime.Unix(),
		Sender:      payment.From,
		Destination: destinationAddress,
		Amount:      payment.Amount,
	}
	if err := o.store.InsertStellarDeposit(ctx, deposit); err != nil {
		return errors.Wrapf(err, "error inserting stellar deposit: %s", payment.Transaction.Hash)
	}

	return nil
}
