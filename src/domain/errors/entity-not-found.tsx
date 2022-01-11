export class EntityNotFound extends Error {
  constructor (entityName: string) {
    super(`${entityName} not found`)
    this.name = 'EntityNotFound'
  }
}
