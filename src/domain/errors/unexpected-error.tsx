export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected status code')
    this.name = 'UnexpectedError'
  }
}
