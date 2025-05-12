## Short Explanation of the architecture and design

## Components
ca: company api (external)
dds: driver discovery server
ddf: driver discover frontend ui

## Architecture:

- DDS provides 2 APIs.
    1. applicants
    2. contact-one
- DDS streams the data from CA for /applicants API
- DDS, while talking to CA expects huge amounts of records in response, 
    - It should process it as a stream and work in limited memory footprint.
    - Optional to implement pagination over this response
- 
- DDF is a a react SPA, talks to DDS, no authentication yet.
    - Has a page with list of applicants, ability to filter, and see results.
    - for each record in the display, the user is able to contact the applicant with a CTA

