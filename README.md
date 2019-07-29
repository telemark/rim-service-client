[![Build Status](https://travis-ci.org/telemark/rim-service-client.svg?branch=master)](https://travis-ci.org/telemark/rim-service-client)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# rim-service-client

# Create query

## getDataToArchive

* antallElevDokument
* fylke

## saveStatusArchived

* fagsystemNavn
* dokumentId
* fodselsnummer
* arkiveringUtfort

## saveStatusArchivedError

* fagsystemNavn
* feilId
* feiltype
* detaljertBeskrivelse

# Example

```JavaScript
const client = require('./index')

const argOpts = {
  antallElevDokument: 1,
  fylke: 1
}

const args = client.getDataToArchive(argOpts)

console.log(args)

const clientOpts = {
  url: 'google.no',
  username: 'test',
  password: 'test',
  data: args
}


/* Using callback
client(clientOpts, (err, data) => {
  console.log(err || data)
  process.exit(0)
})
*/

client(clientOpts).then((data) => {
  console.log(data)
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
```

## License

[MIT](LICENSE)
