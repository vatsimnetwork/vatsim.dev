---
sidebar_position: 2
---
# Usage
The webhook API simply relies on your service having a `POST` endpoint to which the data can be sent to. Details on what data is sent and how the data is structured are documented in the [structure](./structure) section.

:::info
After processing the webhook data, you must respond to the request with a `200 OK` response. This signals to the API that you received the webhook; otherwise, the same payload will be sent again under the assumption that your service did not receive the webhook.
:::

Specific examples on how to use the webhook API with a specific language or framework, are provided in the [language samples](./language-samples) section.
