# APIs

The VATSIM network is built on top of many different services, several of which
each provide their own API. This page provides an overview of the various
publicly-available APIs and what they do.

## Connect API / OAuth2 Server

The Connect API and OAuth2 Server is the primary authentication mechanism for
VATSIM services. It provides a single sign-on experience for VATSIM members,
allowing them to log in to any service with their VATSIM credentials.

VATSIM Connect is available to all VATSIM organizations as well as third-party
services. Please read the [Connect overview](./connect/index.md) for more
information regarding getting started with Connect.

[Browse the Connect API documentation](/api/connect-api)

## Core API

The Core API is the primary API for interacting with VATSIM data. It provides
information about VATSIM members, including their personal information, ratings,
and statistics.

The public may use the Core API to access anonymized information about VATSIM
members. Names, email addresses, and other personally-identifying information is
not available to the public.

If you are a VATSIM division or subdivision, you may use the Core API to update
your roster information and read your members' personal information. If you do
not yet have access to the Core API, please [contact the tech team][ticket].

[Browse the Core API documentation](/api/core-api)

## Data API

The Data API provides access to real-time data about the VATSIM network. It
provides information about pilots and controllers who are currently online,
including their position, altitude, and other information.

The Data API is available to the public, and does not require authentication.

[Browse the Data API documentation](/api/data-api)

## Events API

The Events API provides access to information about upcoming events on the
VATSIM network. It provides information about each event, including the date and
time, organizers, and description.

The Events API is available to the public, and does not require authentication.

[Browse the Events API documentation](/api/events-api)

## METAR API

The METAR API provides access to real-time METAR information for airports around
the world.

The METAR API is available to the public, and does not require authentication.

[Browse the METAR API documentation](/api/metar-api)

## Slurper API

The Slurper API provides access to real-time connection information for a given
VATSIM user. It is mainly used by the Audio for VATSIM clients to determine
a user's connection status.

The Slurper API is available to the public, and does not require authentication.

[Browse the Slurper API documentation](/api/slurper-api)


[ticket]: https://support.vatsim.net/open.php?topicId=16
