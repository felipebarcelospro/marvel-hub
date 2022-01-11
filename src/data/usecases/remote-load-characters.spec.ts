import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadCharactersList } from './remote-load-characters'

interface Sut {
  sut: RemoteLoadCharactersList
  httpClient: HttpClientSpy<MarvelHttpResponse>
}

const makeFakeCharacter = (): unknown => ({
  id: '1',
  name: 'any_name',
  description: 'any_description',
  thumbnail: {
    path: 'any_cover',
    extension: 'jpg'
  },
  comics: {
    available: 10
  }
})

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

  it('should call httpClient with correct URL', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'ok',
      data: {
        results: [
          makeFakeCharacter()
        ]
      }
    }

    await sut.execute()

    expect(httpClient.url).toBe('/characters')
  })
})

export {}
