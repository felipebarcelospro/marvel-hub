import { EntityNotFound } from '../../domain/errors/entity-not-found'
import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadCharacterById } from './remote-load-character-by-id'

interface Sut {
  sut: RemoteLoadCharacterById
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
  const sut = new RemoteLoadCharacterById(httpClient)

  return { sut, httpClient }
}

describe('RemoteLoadCharacterById', () => {
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

    await sut.execute({ id: '1' })

    expect(httpClient.url).toBe('/characters/1')
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

    await sut.execute({ id: '1' })

    expect(httpClient.method).toBe('get')
  })

  it('should return a character on success', async () => {
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

    const character = await sut.execute({ id: '1' })

    expect(character).toEqual({
      id: '1',
      name: 'any_name',
      description: 'any_description',
      cover: 'any_cover.jpg',
      comicsCount: 10
    })
  })

  it('should throw if httpClient returns an error', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.statusCode = 500

    const promise = sut.execute({ id: '1' })

    await expect(promise).rejects.toEqual(new UnexpectedError(httpClient.response.statusCode))
  })

  it('should throw if comic is not found', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: []
      }
    }

    const promise = sut.execute({ id: '2' })

    await expect(promise).rejects.toEqual(new EntityNotFound('Character'))
  })
})
