
## Components
ca: company api (external)
dds: driver discovery server
ddf: driver discover frontend ui

## Requirements:
[Specified here](./tech-summary.md)

## Functional requirements

1. Drivers list API @dds, 
 - request can take 2 filter params, location & qualification(drivers-license-codes)
 - the filters are combinable
 - in future we may add more params
 - it should contact @ca & fetch the raw list of applicants on the go
 - respond with a filtered list using the filters specified in the response
 - maybe implement pagination to this api.


2. Driver Contact API @dds

3. @ddf : Drivers list UI

4. @ddf : Drivers contact interaction

5. @dds : unit tests
