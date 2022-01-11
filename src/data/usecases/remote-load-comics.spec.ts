import { LoadComicsList } from '../../domain/usecases/load-comics'
import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadComicsList } from './remote-load-comics'

interface Sut {
  sut: RemoteLoadComicsList
  httpClient: HttpClientSpy<MarvelHttpResponse<LoadComicsList.Model[]>>
}

const makeSut = (): Sut => {
  const httpClient = new HttpClientSpy()
  const sut = new RemoteLoadComicsList(httpClient)

  return { sut, httpClient }
}

describe('RemoteLoadComics', () => {
  it('should by called', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  })
})

export {}
