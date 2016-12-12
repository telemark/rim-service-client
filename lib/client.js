'use strict'

const soap = require('soap')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options')
    }
    if (!options.url) {
      throw Error('Missing required input: options.url')
    }
    if (!options.username) {
      throw Error('Missing required input: options.username')
    }
    if (!options.password) {
      throw Error('Missing required input: options.password')
    }
    if (!options.data) {
      throw Error('Missing required input: options.data')
    }
    if (!options.data.args) {
      throw Error('Missing required input: options.data.args')
    }
    if (!options.data.method) {
      throw Error('Missing required input: options.data.method')
    }

    const clientOpts = {
      forceSoap12Headers: true,
      ignoredNamespaces: {
        namespaces: ['targetNamespace', 'typedNamespace'],
        override: true
      }
    }

    const wsOpts = {
      passwordType: 'PasswordText', // PasswordDigest or PasswordText
      hasTimeStamp: false,
      hasTokenCreated: true,
      hasNonce: true,
      mustUnderstand: true
      // actor: true
    }

    const wsSecurity = new soap.WSSecurity(options.username, options.password, wsOpts)

    soap.createClient(options.url, clientOpts, (err, client) => {
      if (err) {
        if (callback) { return callback(err) }
        return reject(err)
      }
      client.setSecurity(wsSecurity)
      client[options.data.method](options.data.args, (err, result) => {
        if (options.showRequest) {
          console.log(client.lastRequest)
        }
        if (err) {
          if (callback) { return callback(err) }
          return reject(err)
        }
        if (callback) { return callback(null, result) }
        return resolve(result)
      })
    })
  })
}
