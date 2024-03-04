# Webhooks
# Introduction
Webhooks are automated messages that are sent to your service via an `HTTP POST` request to report the creation, modification, or deletion of a database model. This is the recommended way to subscribe to changes in the database, and is designed to supersede the old paradigm of polling the API for changes.

The kinds of webhooks you receive will depend on your [configuration](./configuration), and a list of all possible types is available [here](./structure#action).
