# Controller Coordinates

## Introduction

As one controller may be listening on multiple transceivers, a "center point"
for a given controller becomes ambiguous. To solve this problem, we recommend
using the center of the transceivers as the location of the controller.

The [Data API](/api/data-api)'s transceiver data returns each transceiver's
longitude and latitude for a given callsign, allowing you to calculate this.

## Implementation

The [AFV Map](https://afv-map.vatsim.net) calculates the center of the
transceivers and uses the result as the location for the controller. Its
implementation can be found [here][impl].

We've also provided StackOverflow solutions below for calculating the center of
a set of coordinates in various languages:

* [C#](https://stackoverflow.com/a/14231286)
* [Dart](https://stackoverflow.com/a/60163851)
* [Java](https://stackoverflow.com/a/58845171)
* [Objective-C](https://stackoverflow.com/a/21298192)
* [PHP](https://stackoverflow.com/a/18623672)
* [Python (Django)](https://stackoverflow.com/a/43070470)
* [Python (NumPy)](https://stackoverflow.com/a/54549097)
* [Ruby](https://stackoverflow.com/a/55990259)
* [Swift](https://stackoverflow.com/a/37595746)


[impl]: https://github.com/vatsimnetwork/afv-map/blob/7d3e78e515f174f56ddc9482668a290563e6e068/src/map/util.ts
