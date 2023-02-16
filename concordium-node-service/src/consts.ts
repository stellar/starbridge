export const BRIDGE_CONTRACT_RAW_SCHEMA =
  '//8DAQAAAAoAAABnYm1fQnJpZGdlAQAUAAQAAAAFAAAAdG9rZW4MCAAAAHRva2VuX2lkHQAKAAAAdmFsaWRhdG9ycxACEyEAAAACEwAAAHZhbGlkYXRvcnNfcmVxdWlyZWQCDAAAAAwAAABhZGRWYWxpZGF0b3IEEyEAAAACFRQAAAAMAAAAVW5hdXRob3JpemVkAgsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CIAAAAEludmFsaWRDb3VudE9GVmFsaWRhdG9yc1JlcXVpcmVkAhoAAABEdXBsaWNhdGVXaXRoZHJhd1JlcXVlc3RlZAIUAAAAV2l0aGRyYXdBbW91bnRJc1plcm8CEwAAAFdpdGhkcmF3YWxJc0V4cGlyZWQCFQAAAEludmFsaWRWYWxpZGF0b3JJbmRleAIXAAAARHVwbGljYXRlVmFsaWRhdG9ySW5kZXgCIwAAAEludmFsaWROdW1iZXJPZlNpZ25hdHVyZXNBbmRJbmRleGVzAiMAAABJbmNvcnJlY3ROdW1iZXJPZlNpZ25hdHVyZXNTdXBwbGllZAIQAAAASW52YWxpZFNpZ25hdHVyZQITAAAARGVwb3NpdEFtb3VudElzWmVybwIHAAAAZGVwb3NpdAQUAAIAAAALAAAAZGVzdGluYXRpb24TAAEAAAIGAAAAYW1vdW50BRUUAAAADAAAAFVuYXV0aG9yaXplZAILAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAiAAAABJbnZhbGlkQ291bnRPRlZhbGlkYXRvcnNSZXF1aXJlZAIaAAAARHVwbGljYXRlV2l0aGRyYXdSZXF1ZXN0ZWQCFAAAAFdpdGhkcmF3QW1vdW50SXNaZXJvAhMAAABXaXRoZHJhd2FsSXNFeHBpcmVkAhUAAABJbnZhbGlkVmFsaWRhdG9ySW5kZXgCFwAAAER1cGxpY2F0ZVZhbGlkYXRvckluZGV4AiMAAABJbnZhbGlkTnVtYmVyT2ZTaWduYXR1cmVzQW5kSW5kZXhlcwIjAAAASW5jb3JyZWN0TnVtYmVyT2ZTaWduYXR1cmVzU3VwcGxpZWQCEAAAAEludmFsaWRTaWduYXR1cmUCEwAAAERlcG9zaXRBbW91bnRJc1plcm8CDwAAAHJlbW92ZVZhbGlkYXRvcgQTIQAAAAIVFAAAAAwAAABVbmF1dGhvcml6ZWQCCwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCDgAAAENvbnRyYWN0UGF1c2VkAhMAAABJbnZva2VDb250cmFjdEVycm9yAhMAAABJbnZva2VUcmFuc2ZlckVycm9yAhoAAABGYWlsZWRVcGdyYWRlTWlzc2luZ01vZHVsZQIcAAAARmFpbGVkVXBncmFkZU1pc3NpbmdDb250cmFjdAIlAAAARmFpbGVkVXBncmFkZVVuc3VwcG9ydGVkTW9kdWxlVmVyc2lvbgIgAAAASW52YWxpZENvdW50T0ZWYWxpZGF0b3JzUmVxdWlyZWQCGgAAAER1cGxpY2F0ZVdpdGhkcmF3UmVxdWVzdGVkAhQAAABXaXRoZHJhd0Ftb3VudElzWmVybwITAAAAV2l0aGRyYXdhbElzRXhwaXJlZAIVAAAASW52YWxpZFZhbGlkYXRvckluZGV4AhcAAABEdXBsaWNhdGVWYWxpZGF0b3JJbmRleAIjAAAASW52YWxpZE51bWJlck9mU2lnbmF0dXJlc0FuZEluZGV4ZXMCIwAAAEluY29ycmVjdE51bWJlck9mU2lnbmF0dXJlc1N1cHBsaWVkAhAAAABJbnZhbGlkU2lnbmF0dXJlAhMAAABEZXBvc2l0QW1vdW50SXNaZXJvAg8AAABzZXRJbXBsZW1lbnRvcnMEFAACAAAAAgAAAGlkFgAMAAAAaW1wbGVtZW50b3JzEAIMFRQAAAAMAAAAVW5hdXRob3JpemVkAgsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CIAAAAEludmFsaWRDb3VudE9GVmFsaWRhdG9yc1JlcXVpcmVkAhoAAABEdXBsaWNhdGVXaXRoZHJhd1JlcXVlc3RlZAIUAAAAV2l0aGRyYXdBbW91bnRJc1plcm8CEwAAAFdpdGhkcmF3YWxJc0V4cGlyZWQCFQAAAEludmFsaWRWYWxpZGF0b3JJbmRleAIXAAAARHVwbGljYXRlVmFsaWRhdG9ySW5kZXgCIwAAAEludmFsaWROdW1iZXJPZlNpZ25hdHVyZXNBbmRJbmRleGVzAiMAAABJbmNvcnJlY3ROdW1iZXJPZlNpZ25hdHVyZXNTdXBwbGllZAIQAAAASW52YWxpZFNpZ25hdHVyZQITAAAARGVwb3NpdEFtb3VudElzWmVybwIJAAAAc2V0UGF1c2VkBBQAAQAAAAYAAABwYXVzZWQBFRQAAAAMAAAAVW5hdXRob3JpemVkAgsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CIAAAAEludmFsaWRDb3VudE9GVmFsaWRhdG9yc1JlcXVpcmVkAhoAAABEdXBsaWNhdGVXaXRoZHJhd1JlcXVlc3RlZAIUAAAAV2l0aGRyYXdBbW91bnRJc1plcm8CEwAAAFdpdGhkcmF3YWxJc0V4cGlyZWQCFQAAAEludmFsaWRWYWxpZGF0b3JJbmRleAIXAAAARHVwbGljYXRlVmFsaWRhdG9ySW5kZXgCIwAAAEludmFsaWROdW1iZXJPZlNpZ25hdHVyZXNBbmRJbmRleGVzAiMAAABJbmNvcnJlY3ROdW1iZXJPZlNpZ25hdHVyZXNTdXBwbGllZAIQAAAASW52YWxpZFNpZ25hdHVyZQITAAAARGVwb3NpdEFtb3VudElzWmVybwIVAAAAc2V0VmFsaWRhdG9yc1JlcXVpcmVkBAQVFAAAAAwAAABVbmF1dGhvcml6ZWQCCwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCDgAAAENvbnRyYWN0UGF1c2VkAhMAAABJbnZva2VDb250cmFjdEVycm9yAhMAAABJbnZva2VUcmFuc2ZlckVycm9yAhoAAABGYWlsZWRVcGdyYWRlTWlzc2luZ01vZHVsZQIcAAAARmFpbGVkVXBncmFkZU1pc3NpbmdDb250cmFjdAIlAAAARmFpbGVkVXBncmFkZVVuc3VwcG9ydGVkTW9kdWxlVmVyc2lvbgIgAAAASW52YWxpZENvdW50T0ZWYWxpZGF0b3JzUmVxdWlyZWQCGgAAAER1cGxpY2F0ZVdpdGhkcmF3UmVxdWVzdGVkAhQAAABXaXRoZHJhd0Ftb3VudElzWmVybwITAAAAV2l0aGRyYXdhbElzRXhwaXJlZAIVAAAASW52YWxpZFZhbGlkYXRvckluZGV4AhcAAABEdXBsaWNhdGVWYWxpZGF0b3JJbmRleAIjAAAASW52YWxpZE51bWJlck9mU2lnbmF0dXJlc0FuZEluZGV4ZXMCIwAAAEluY29ycmVjdE51bWJlck9mU2lnbmF0dXJlc1N1cHBsaWVkAhAAAABJbnZhbGlkU2lnbmF0dXJlAhMAAABEZXBvc2l0QW1vdW50SXNaZXJvAggAAABzdXBwb3J0cwYQARYAEAEVAwAAAAkAAABOb1N1cHBvcnQCBwAAAFN1cHBvcnQCCQAAAFN1cHBvcnRCeQEBAAAAEAAMFRQAAAAMAAAAVW5hdXRob3JpemVkAgsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAg4AAABDb250cmFjdFBhdXNlZAITAAAASW52b2tlQ29udHJhY3RFcnJvcgITAAAASW52b2tlVHJhbnNmZXJFcnJvcgIaAAAARmFpbGVkVXBncmFkZU1pc3NpbmdNb2R1bGUCHAAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nQ29udHJhY3QCJQAAAEZhaWxlZFVwZ3JhZGVVbnN1cHBvcnRlZE1vZHVsZVZlcnNpb24CIAAAAEludmFsaWRDb3VudE9GVmFsaWRhdG9yc1JlcXVpcmVkAhoAAABEdXBsaWNhdGVXaXRoZHJhd1JlcXVlc3RlZAIUAAAAV2l0aGRyYXdBbW91bnRJc1plcm8CEwAAAFdpdGhkcmF3YWxJc0V4cGlyZWQCFQAAAEludmFsaWRWYWxpZGF0b3JJbmRleAIXAAAARHVwbGljYXRlVmFsaWRhdG9ySW5kZXgCIwAAAEludmFsaWROdW1iZXJPZlNpZ25hdHVyZXNBbmRJbmRleGVzAiMAAABJbmNvcnJlY3ROdW1iZXJPZlNpZ25hdHVyZXNTdXBwbGllZAIQAAAASW52YWxpZFNpZ25hdHVyZQITAAAARGVwb3NpdEFtb3VudElzWmVybwILAAAAdXBkYXRlQWRtaW4EFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADBUUAAAADAAAAFVuYXV0aG9yaXplZAILAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAiAAAABJbnZhbGlkQ291bnRPRlZhbGlkYXRvcnNSZXF1aXJlZAIaAAAARHVwbGljYXRlV2l0aGRyYXdSZXF1ZXN0ZWQCFAAAAFdpdGhkcmF3QW1vdW50SXNaZXJvAhMAAABXaXRoZHJhd2FsSXNFeHBpcmVkAhUAAABJbnZhbGlkVmFsaWRhdG9ySW5kZXgCFwAAAER1cGxpY2F0ZVZhbGlkYXRvckluZGV4AiMAAABJbnZhbGlkTnVtYmVyT2ZTaWduYXR1cmVzQW5kSW5kZXhlcwIjAAAASW5jb3JyZWN0TnVtYmVyT2ZTaWduYXR1cmVzU3VwcGxpZWQCEAAAAEludmFsaWRTaWduYXR1cmUCEwAAAERlcG9zaXRBbW91bnRJc1plcm8CBwAAAHVwZ3JhZGUEFAACAAAABgAAAG1vZHVsZR4gAAAABwAAAG1pZ3JhdGUVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAAPFgEdARUUAAAADAAAAFVuYXV0aG9yaXplZAILAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAiAAAABJbnZhbGlkQ291bnRPRlZhbGlkYXRvcnNSZXF1aXJlZAIaAAAARHVwbGljYXRlV2l0aGRyYXdSZXF1ZXN0ZWQCFAAAAFdpdGhkcmF3QW1vdW50SXNaZXJvAhMAAABXaXRoZHJhd2FsSXNFeHBpcmVkAhUAAABJbnZhbGlkVmFsaWRhdG9ySW5kZXgCFwAAAER1cGxpY2F0ZVZhbGlkYXRvckluZGV4AiMAAABJbnZhbGlkTnVtYmVyT2ZTaWduYXR1cmVzQW5kSW5kZXhlcwIjAAAASW5jb3JyZWN0TnVtYmVyT2ZTaWduYXR1cmVzU3VwcGxpZWQCEAAAAEludmFsaWRTaWduYXR1cmUCEwAAAERlcG9zaXRBbW91bnRJc1plcm8CBAAAAHZpZXcFFAAHAAAABQAAAGFkbWluFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAUAAAB0b2tlbgwIAAAAdG9rZW5faWQdAAYAAABwYXVzZWQBCgAAAHZhbGlkYXRvcnMQAhMhAAAAAhMAAAB2YWxpZGF0b3JzX3JlcXVpcmVkAgcAAAB2ZXJzaW9uBBUUAAAADAAAAFVuYXV0aG9yaXplZAILAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAiAAAABJbnZhbGlkQ291bnRPRlZhbGlkYXRvcnNSZXF1aXJlZAIaAAAARHVwbGljYXRlV2l0aGRyYXdSZXF1ZXN0ZWQCFAAAAFdpdGhkcmF3QW1vdW50SXNaZXJvAhMAAABXaXRoZHJhd2FsSXNFeHBpcmVkAhUAAABJbnZhbGlkVmFsaWRhdG9ySW5kZXgCFwAAAER1cGxpY2F0ZVZhbGlkYXRvckluZGV4AiMAAABJbnZhbGlkTnVtYmVyT2ZTaWduYXR1cmVzQW5kSW5kZXhlcwIjAAAASW5jb3JyZWN0TnVtYmVyT2ZTaWduYXR1cmVzU3VwcGxpZWQCEAAAAEludmFsaWRTaWduYXR1cmUCEwAAAERlcG9zaXRBbW91bnRJc1plcm8CCAAAAHdpdGhkcmF3BBQABgAAAAIAAABpZBMgAAAAAgoAAABleHBpcmF0aW9uBQIAAAB0bxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwGAAAAYW1vdW50BQoAAABzaWduYXR1cmVzEAITQAAAAAIHAAAAaW5kZXhlcxACAhUUAAAADAAAAFVuYXV0aG9yaXplZAILAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAIOAAAAQ29udHJhY3RQYXVzZWQCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICEwAAAEludm9rZVRyYW5zZmVyRXJyb3ICGgAAAEZhaWxlZFVwZ3JhZGVNaXNzaW5nTW9kdWxlAhwAAABGYWlsZWRVcGdyYWRlTWlzc2luZ0NvbnRyYWN0AiUAAABGYWlsZWRVcGdyYWRlVW5zdXBwb3J0ZWRNb2R1bGVWZXJzaW9uAiAAAABJbnZhbGlkQ291bnRPRlZhbGlkYXRvcnNSZXF1aXJlZAIaAAAARHVwbGljYXRlV2l0aGRyYXdSZXF1ZXN0ZWQCFAAAAFdpdGhkcmF3QW1vdW50SXNaZXJvAhMAAABXaXRoZHJhd2FsSXNFeHBpcmVkAhUAAABJbnZhbGlkVmFsaWRhdG9ySW5kZXgCFwAAAER1cGxpY2F0ZVZhbGlkYXRvckluZGV4AiMAAABJbnZhbGlkTnVtYmVyT2ZTaWduYXR1cmVzQW5kSW5kZXhlcwIjAAAASW5jb3JyZWN0TnVtYmVyT2ZTaWduYXR1cmVzU3VwcGxpZWQCEAAAAEludmFsaWRTaWduYXR1cmUCEwAAAERlcG9zaXRBbW91bnRJc1plcm8CDQAAAHdpdGhkcmF3X2hhc2gGFAAGAAAAAgAAAGlkEyAAAAACCgAAAGV4cGlyYXRpb24FAgAAAHRvFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAYAAABhbW91bnQFCgAAAHNpZ25hdHVyZXMQAhNAAAAAAgcAAABpbmRleGVzEAICFAABAAAABAAAAGhhc2gTIAAAAAIVFAAAAAwAAABVbmF1dGhvcml6ZWQCCwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCDgAAAENvbnRyYWN0UGF1c2VkAhMAAABJbnZva2VDb250cmFjdEVycm9yAhMAAABJbnZva2VUcmFuc2ZlckVycm9yAhoAAABGYWlsZWRVcGdyYWRlTWlzc2luZ01vZHVsZQIcAAAARmFpbGVkVXBncmFkZU1pc3NpbmdDb250cmFjdAIlAAAARmFpbGVkVXBncmFkZVVuc3VwcG9ydGVkTW9kdWxlVmVyc2lvbgIgAAAASW52YWxpZENvdW50T0ZWYWxpZGF0b3JzUmVxdWlyZWQCGgAAAER1cGxpY2F0ZVdpdGhkcmF3UmVxdWVzdGVkAhQAAABXaXRoZHJhd0Ftb3VudElzWmVybwITAAAAV2l0aGRyYXdhbElzRXhwaXJlZAIVAAAASW52YWxpZFZhbGlkYXRvckluZGV4AhcAAABEdXBsaWNhdGVWYWxpZGF0b3JJbmRleAIjAAAASW52YWxpZE51bWJlck9mU2lnbmF0dXJlc0FuZEluZGV4ZXMCIwAAAEluY29ycmVjdE51bWJlck9mU2lnbmF0dXJlc1N1cHBsaWVkAhAAAABJbnZhbGlkU2lnbmF0dXJlAhMAAABEZXBvc2l0QW1vdW50SXNaZXJvAgEfBgAAAAAIAAAATmV3QWRtaW4AAQAAAAkAAABuZXdfYWRtaW4VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMAQcAAABEZXBvc2l0AAMAAAAGAAAAc2VuZGVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAsAAABkZXN0aW5hdGlvbh4gAAAABgAAAGFtb3VudAUCCAAAAFdpdGhkcmF3AAMAAAACAAAAaWQeIAAAAAkAAAByZWNpcGllbnQVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMBgAAAGFtb3VudAUEDAAAAEFkZFZhbGlkYXRvcgACAAAACQAAAHZhbGlkYXRvch4gAAAABwAAAHZlcnNpb24EBQ8AAABSZW1vdmVWYWxpZGF0b3IAAgAAAAkAAAB2YWxpZGF0b3IeIAAAAAcAAAB2ZXJzaW9uBAYVAAAAU2V0UmVxdWlyZWRWYWxpZGF0b3JzAAEAAAATAAAAdmFsaWRhdG9yc19yZXF1aXJlZAI';
