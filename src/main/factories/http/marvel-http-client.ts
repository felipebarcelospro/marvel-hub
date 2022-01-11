import { MarvelHttpClient } from '../../../infra/http/marvel-http-client'

export const makeMarvelHttpClient = (): MarvelHttpClient => {
  return new MarvelHttpClient()
}
