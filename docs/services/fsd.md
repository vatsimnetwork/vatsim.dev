# FSD

If you've spent any time on VATSIM, you likely know that the network is built on
top of a piece of software called the Flight Simulator Daemon, or FSD. FSD is
the core of the VATSIM network, and is responsible for managing all the
connections between pilots and controllers.

If you've been paying attention, you may have noticed that FSD is not listed in
the [API Overview](./apis.md). FSD's primary purpose is to manage
connections between pilots and controllers, and it does not provide any public
APIs. The [Data API](/api/data-api) provides access to FSD's data, but does not
provide any method of interaction with FSD itself.

If you're interested in developing software that interacts with FSD, please
contact <tech@vatsim.net> to discuss your project. Upon approval, you will be
granted access to the FSD protocol documentation and other resources.

Please explore the rest of the documentation to learn more about the VATSIM APIs
that are available to the public.
