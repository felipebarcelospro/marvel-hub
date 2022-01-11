export class UnexpectedError extends Error {
  constructor (statusCode: number) {
    super(`Unexpected status code - ${statusCode}`)
    this.name = 'UnexpectedError'
  }
}
