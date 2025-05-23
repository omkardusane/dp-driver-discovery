
## Components
ca: company api (external)
dds: driver discovery server
ddf: driver discover frontend ui

## Requirements:
[Specified here](./tech-summary.md)

## Functional requirements

1. Drivers list API @dds, 
 - request can take many filter params like drivers-license-codes and languages english, deutsche
 - the filters are combinable with eachother
 - in future we may add more params
 - it should contact @ca & fetch the raw list of applicants on the go
 - respond with a filtered list using the filters specified in the response
 - maybe implement pagination to this api.


2. Driver Contact API @dds

3. @ddf : Drivers list UI

4. @ddf : Drivers contact interaction

5. @dds : unit tests


### work breakdown: dds

- [x] implement validation for get applicants api
- [x] implement contact-one api 
- [x] add test case for validation of get applicants
- [x] integrate with mock api for applicants from CA
- [x] implement filters over the response of ca-applicants data
- [x] add test case for the filtering logic
- [ ] maybe implement pagination support


### work breakdown: ddf
- [x] implement basic Ui for viewing applicants
- [x] implement filters UI
- [x] integrate with get-applicants API to view
- [x] connect with filters from ui
- [x] implement contact-one button + integrate api & toast
- [ ] 