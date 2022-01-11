import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadCharacterById } from './remote-load-character-by-id'

interface Sut {
  sut: RemoteLoadCharacterById
  httpClient: HttpClientSpy<MarvelHttpResponse>
}

const makeSut = (): Sut => {
  const httpClient = new HttpClientSpy()
  const sut = new RemoteLoadCharacterById(httpClient)

  return { sut, httpClient }
}

describe('RemoteLoadCharacterById', () => {
  it('should by called', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  })
})
