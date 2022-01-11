import { UnexpectedError } from '../../domain/errors/unexpected-error'
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

  it('should call httpClient with correct method', async () => {
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

    expect(httpClient.method).toBe('get')
  })

  it('should call httpClient with correct params', async () => {
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

    const params = {
      limit: 20,
      offset: 0
    }

    await sut.execute(params)

    expect(httpClient.params).toEqual(params)
  })

  it('should return a list of characters on success', async () => {
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

    const characters = await sut.execute()

    expect(characters).toEqual([
      {
        id: '1',
        name: 'any_name',
        description: 'any_description',
        cover: 'any_cover.jpg',
        comicsCount: 10
      }
    ])
  })

  it('should throw if httpClient returns an error', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.statusCode = 500

    const promise = sut.execute()

    await expect(promise).rejects.toEqual(new UnexpectedError(httpClient.response.statusCode))
  })
})

export {}
