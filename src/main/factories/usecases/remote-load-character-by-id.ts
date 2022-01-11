import { RemoteLoadCharacterById } from '../../../data/usecases/remote-load-character-by-id'
import { LoadCharacterById } from '../../../domain/usecases/load-characters-by-id'
import { makeMarvelHttpClient } from '../http/marvel-http-client'

export const makeRemoteLoadCharacterById = (): LoadCharacterById => {
  return new RemoteLoadCharacterById(makeMarvelHttpClient())
}
