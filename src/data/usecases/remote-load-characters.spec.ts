import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadCharactersList } from './remote-load-characters'

interface Sut {
  sut: RemoteLoadCharactersList
  httpClient: HttpClientSpy<MarvelHttpResponse>
}

const makeSut = (): Sut => {
  const httpClient = new HttpClientSpy()
  const sut = new RemoteLoadCharactersList(httpClient)

  return { sut, httpClient }
}

describe('RemoteLoadCharactersList', () => {
  it('should by called', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  })
})

export {}
