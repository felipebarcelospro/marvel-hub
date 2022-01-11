import { RemoteLoadCharactersList } from '../../../data/usecases/remote-load-characters'
import { LoadCharactersList } from '../../../domain/usecases/load-characters'
import { makeMarvelHttpClient } from '../http/marvel-http-client'

export const makeRemoteLoadCharactersList = (): LoadCharactersList => {
  return new RemoteLoadCharactersList(makeMarvelHttpClient())
}
