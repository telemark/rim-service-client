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

/*
client(clientOpts, (err, data) => {
  console.log(err || data)
})
*/

client(clientOpts).then((data) => {
  console.log(data)
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
