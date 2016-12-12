'use strict'

module.exports = require('./lib/client')
module.exports.getDataToArchive = require('./lib/setArgs').getDataToArchive
module.exports.saveStatusArchived = require('./lib/setArgs').saveStatusArchived
module.exports.saveStatusArchivedError = require('./lib/setArgs').saveStatusArchivedError
