---
sidebar_position: 4
---
# Structure
Below is an example webhook for a combined creation and update action.
```json
{
    "resource": 1851903,
    "actions": [
        {
            "action": "member_created_action",
            "authority": "myVATSIM",
            "comment": null,
            "deltas": [
                {
                    "field": "id",
                    "before": null,
                    "after": 1851903
                },
                {
                    "field": "name_first",
                    "before": null,
                    "after": "John"
                },
                {
                    "field": "name_last",
                    "before": null,
                    "after": "Doe"
                },
                {
                    "field": "email",
                    "before": null,
                    "after": "tech@vatsim.net"
                },
                {
                    "field": "rating",
                    "before": null,
                    "after": 1
                },
                {
                    "field": "pilotrating",
                    "before": null,
                    "after": -1
                },
                {
                    "field": "susp_date",
                    "before": null,
                    "after": "2022-10-11T12:09:13"
                },
                {
                    "field": "reg_date",
                    "before": null,
                    "after": "2022-10-11T12:09:13"
                },
                {
                    "field": "region_id",
                    "before": null,
                    "after": "AMAS"
                },
                {
                    "field": "division_id",
                    "before": null,
                    "after": "USA"
                },
                {
                    "field": "subdivision_id",
                    "before": null,
                    "after": null
                },
                {
                    "field": "lastratingchange",
                    "before": null,
                    "after": null
                }
            ],
            "timestamp": 1665490153.562588
        },
        {
            "action": "member_changed_action",
            "authority": "VATUSA",
            "comment": "Promotion to S1",
            "deltas": [
                {
                    "field": "rating",
                    "before": 1,
                    "after": 2
                },
                {
                    "field": "lastratingchange",
                    "before": null,
                    "after": "2022-10-18T17:19:34"
                }
            ],
            "timestamp": 1666113574.577162
        }
    ]
}
```

## `resource`
The `resource` field denotes the unique identifier of the database object being changed. The underlying database field varys by action, and the mapping is provided in the [actions table](#action).

## `actions`
When a change is made to a database model, a single, timestamped **action** is generated with all of the associated [deltas](#deltas) contained within.
:::info
Generally, the length of this field will be 1; however in the event your service is unable to accept webhooks, this field will accumulate all actions that have occurred since the last successful webhook. In this event, the `actions` field is pre-sorted from the earliest to latest.
:::

### `action`
The `action` field describes what kind of webhook is being emitted. Below is a list of the possible actions and their presecribed function, along with any other relevant information.

| Action                  | `resource` Field                         | Function                        |
|-------------------------|------------------------------------------|---------------------------------|
| `member_created_action` | `Member.id`| Emitted when a user is created  |
| `member_changed_action` | `Member.id` | Emitted when a user is modified |

More webhooks will be added throughout various testing phases to facilitate GDPR deletion requests, events, and oter necessary functionality.

### `authority`
The `authority` field simply denotes the organization or service responsible for the actions enclosed in the webhook.

### `deltas`
A **delta** simply represents a change in a single field's value, and thus includes the previous and new value. Multiple deltas can be bundled up into an [action](#actions) if multiple fields are changed together.

In webhooks that report the *creation* of a model, the `before` field will be set to `null`.

In webhooks that report the *deletion* of a model, the `after` field will be set to `null`.
