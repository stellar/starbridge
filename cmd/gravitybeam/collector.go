package main

import (
	"context"
	"encoding/base64"
	"encoding/hex"
	"fmt"

	pubsub "github.com/libp2p/go-libp2p-pubsub"
	"github.com/stellar/go/clients/horizonclient"
	supportlog "github.com/stellar/go/support/log"
	"github.com/stellar/go/txnbuild"
)

type CollectorConfig struct {
	NetworkPassphrase string
	Logger            *supportlog.Entry
	HorizonClient     horizonclient.ClientInterface
	PubSub            *pubsub.PubSub
	Store             *Store
}

type Collector struct {
	networkPassphrase string
	logger            *supportlog.Entry
	horizonClient     horizonclient.ClientInterface
	topic             *pubsub.Topic
	store             *Store
}

func NewCollector(config CollectorConfig) (*Collector, error) {
	topic, err := config.PubSub.Join("starbridge-stellar-transactions-signed")
	if err != nil {
		return nil, err
	}
	c := &Collector{
		networkPassphrase: config.NetworkPassphrase,
		logger:            config.Logger,
		horizonClient:     config.HorizonClient,
		store:             config.Store,
		topic:             topic,
	}
	return c, nil
}

func (c *Collector) Collect() error {
	sub, err := c.topic.Subscribe()
	if err != nil {
		return err
	}
	c.logger.Infof("Subscribed to topic %s", c.topic.String())
	ctx := context.Background()
	for {
		logger := c.logger

		msg, err := sub.Next(ctx)
		if err != nil {
			return err
		}

		txBytes := msg.Data
		txB64 := base64.StdEncoding.EncodeToString(txBytes)
		txGeneric, err := txnbuild.TransactionFromXDR(txB64)
		if err != nil {
			return err
		}
		// TODO: Support all tx types.
		tx, ok := txGeneric.Transaction()
		if !ok {
			return fmt.Errorf("unsupported tx type")
		}

		hash, err := tx.Hash(c.networkPassphrase)
		if err != nil {
			return err
		}
		logger = c.logger.WithField("tx", hex.EncodeToString(hash[:]))
		logger.Infof("tx received: sig count: %d", len(tx.Signatures()))

		tx, err = c.store.StoreAndUpdate(hash, tx)
		if err != nil {
			return err
		}
		logger.Infof("tx stored: sig count: %d", len(tx.Signatures()))
	}
}
