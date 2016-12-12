'use strict'

module.exports.getDataToArchive = (options) => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.antallElevDokument) {
    throw Error('Missing required input: options.antallElevDokument')
  }
  if (!options.fylke) {
    throw Error('Missing required input: options.fylke')
  }

  const data = {
    method: 'HentDataForArkivering',
    args: {
      HentDataForArkiveringRequestElm: {
        AntallElevDokument: options.antallElevDokument,
        Fylke: options.fylke
      }
    }
  }
  return data
}

module.exports.saveStatusArchived = (options) => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.fagsystemNavn) {
    throw Error('Missing required input: options.fagsystemNavn')
  }
  if (!options.dokumentId) {
    throw Error('Missing required input: options.dokumentId')
  }
  if (!options.fodselsnummer) {
    throw Error('Missing required input: options.fodselsnummer')
  }
  if (!options.arkiveringUtfort) {
    throw Error('Missing required input: options.arkiveringUtfort')
  }

  const data = {
    method: 'LagreStatusArkiverteData',
    args: {
      LagreStatusArkiverteDataRequestElm: {
        Fagsystemnavn: options.fagsystemNavn,
        DokumentId: options.dokumentId,
        Fodselsnummer: options.fodselsnummer,
        ArkiveringUtfort: options.arkiveringUtfort
      }
    }
  }
  return data
}

module.exports.saveStatusArchivedError = (options) => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.fagsystemNavn) {
    throw Error('Missing required input: options.fagsystemNavn')
  }
  if (!options.feilId) {
    throw Error('Missing required input: options.feilId')
  }
  if (!options.feiltype) {
    throw Error('Missing required input: options.feiltype')
  }
  if (!options.detaljertBeskrivelse) {
    throw Error('Missing required input: options.detaljertBeskrivelse')
  }

  const data = {
    method: 'LagreStatusArkiverteData',
    args: {
      LagreStatusArkiverteDataRequestElm: {
        Fagsystemnavn: options.fagsystemNavn,
        Feilmelding: {
          FeilId: options.feilId,
          Feiltype: options.feiltype,
          DetaljertBeskrivelse: options.detaljertBeskrivelse
        }
      }
    }
  }
  return data
}

