import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadComicById } from './remote-load-comic-by-id'

interface Sut {
  sut: RemoteLoadComicById
  httpClient: HttpClientSpy<MarvelHttpResponse>
}

const makeSut = (): Sut => {
  const httpClient = new HttpClientSpy()
  const sut = new RemoteLoadComicById(httpClient)

  return { sut, httpClient }
}

describe('RemoteLoadComicById', () => {
  it('should by called', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  })
})

export {}
