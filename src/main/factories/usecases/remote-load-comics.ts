import { RemoteLoadComicsList } from '../../../data/usecases/remote-load-comics'
import { LoadComicsList } from '../../../domain/usecases/remote-load-comics'
import { makeMarvelHttpClient } from '../http/marvel-http-client'

export const makeRemoteLoadComicsList = (): LoadComicsList => {
  return new RemoteLoadComicsList(makeMarvelHttpClient())
}
