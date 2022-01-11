import { RemoteLoadComicById } from '../../../data/usecases/remote-load-comic-by-id'
import { LoadComicById } from '../../../domain/usecases/load-comic-by-id'
import { makeMarvelHttpClient } from '../http/marvel-http-client'

export const makeRemoteLoadComicById = (): LoadComicById => {
  return new RemoteLoadComicById(makeMarvelHttpClient())
}
