module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing pram: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
