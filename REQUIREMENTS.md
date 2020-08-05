Hello,

Let's imagine you are working in the Swan company and your mission is to build a new micro-service responsible to expose some information related to a transaction dump.
Please find this dump attached below.

1 / Build a Restful web service API which will load the dump file and expose it as a basic JSON object.

2 / Update the previous endpoint to accept as query param a chunk of IBAN source. If this param is given, the endpoint will only return the list of transaction which match this chunk of IBAN source.

3 / Add a new endpoint nested in the first one to retrieve the biggest transaction. This new endpoint should, of course, take in count the potential query params given to the "parent" endpoint.

The most evaluation criterions sorted by importance :

- Reach our goal
- Architecture and code quality
- Testing
- Extensibility
