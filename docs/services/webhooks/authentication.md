---
sidebar_position: 3
---
# Authentication
Webhooks will be sent to the specified domain with the following headers attached:
- `Authorization` header containing the configured API key; and
- `User-Agent` header set to `VATSIM-API`.

You must be careful to verify that the authorization header matches your configured value to ensure your service will only react to valid webhooks sent by the VATSIM API.
