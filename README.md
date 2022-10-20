# SolarEdge
This is a library for using the SolarEdge Cloud API.

## Supported Endpoints
- Site List
- Site Details
- Site Data
- Site Energy
- Site Power

## Not Supported Entpoints (yet)
- Site Data: Bulk Version
- Site Energy: Bulk Version
- Site Energy - Time Period *
- Site Energy - Time Period: Bulk Version
- Site Energy - Detailed *
- Site Power - Details *
- Site Power: Bulk Version
- Site Overview *
- Site Overview: Bulk Version
- Site Power Flow *
- Storage Information *
- Site Image
- Site Environmental Benefits
- Installer Logo Image
- Components List
- Inventory
- Inverter Technical Data
- Equipment Change Log
- Account List API
- Get Meters Data
- Get Sensor List
- Get Sensor Data
- Current Version
- Supported Version

****Highest Priority***

## Technical informations
### Response Formats
At this time all responses are in JSON

### Language and Time Encoding
- Data is retrieved using UTF-8
- Date and time formats are:
  - Date only: YYYY-MM-DD
  - Date and time: YYYY-MM-DD hh:mm:ss

### JSONP Support
JSONP is ***not*** supported at this time

### Usage Limitations
This library doesn't care about managing limitations.
If you fire to many requests you will get a coresponding response status code.

**Daily Limitation**
- 300 requests for each token
- 300 requests for each site-id

**Concurrency Limitation**
- 3 concurrent API calls from the same source ip

***Those limitations come from SolarEdge and not from this library**