# Sandbox

We provide a sandbox environment for testing integrations with VATSIM Connect.
This environment is wholly independent of our production instance and does not
grant access to any real VATSIM data.

:::caution
The sandbox environment is not intended for production use. It is provided for
testing purposes only. Any data stored in the sandbox environment may be deleted
at any time without notice. Do not use any private or sensitive credentials in
the sandbox environment.
:::

The sandbox environment is available at https://auth-dev.vatsim.net.

## Test Accounts

These accounts are available for testing your integration in the sandbox. They
are not real VATSIM accounts and do not grant access to any real VATSIM data.

The password for every account is the same as the account's VATSIM ID.

| VATSIM ID | Name       | Email                  | Controller Rating    | Pilot Rating  | Region  | Division  | Subdivision |
|-----------|------------|------------------------|----------------------|---------------|---------|-----------|-------------|
| 10000000  | Zero Web   | auth.dev0@vatsim.net   | Suspended            | ATPL          | APAC    | NZ        |             |
| 10000001  | One Web    | auth.dev1@vatsim.net   | Observer             | NEW           | APAC    | PAC       |             |
| 10000002  | Two Web    | auth.dev2@vatsim.net   | S1 Student           | PPL           | AMAS    | USA       |             |
| 10000003  | Three Web  | auth.dev3@vatsim.net   | S2 Student           | PPL           | EMEA    | IL        |             |
| 10000004  | Four Web   | auth.dev4@vatsim.net   | S3 Senior Student    | IR            | EMEA    | EUD       | SPN         |
| 10000005  | Five Web   | auth.dev5@vatsim.net   | C1 Controller        | IR            | APAC    | WA        | AFG         |
| 10000006  | Six Web    | auth.dev6@vatsim.net   | C3 Senior Controller | IR            | EMEA    | EUD       | IRL         |
| 10000007  | Seven Web  | auth.dev7@vatsim.net   | I1 Student           | CMEL          | EMEA    | GBR       |             |
| 10000008  | Eight Web  | auth.dev8@vatsim.net   | I3 Senior Instructor | CMEL          | EMEA    | MENA      |             |
| 10000009  | Nine Web   | auth.dev9@vatsim.net   | SUP Supervisor       | ATPL          | EMEA    | SAF       |             |
| 10000010  | Ten Web    | auth.dev10@vatsim.net  | ADM Administrator    | ATPL          | EMEA    | EUD       | FRA         |

## OAuth Clients

To obtain client credentials, sign in with any of the accounts listed above and
navigate to "Manage OAuth organizations" in the sidebar. Your account will
automatically have access to the "VATSIM Connect Demo" organization &mdash;
creating an organization is not necessary. Select the "OAuth clients" tab and
click the "Add client" button to create a new set of credentials.

Please be courteous and do not delete other developers' clients. If you no
longer need your test client, please delete it to remove clutter.
