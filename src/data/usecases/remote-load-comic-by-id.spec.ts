import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadComicById } from './remote-load-comic-by-id'

interface Sut {
  sut: RemoteLoadComicById
  httpClient: HttpClientSpy<MarvelHttpResponse>
}

const makeFakeComic = (): unknown => ({
  id: '1',
  title: 'any_title',
  description: 'any_description',
  thumbnail: {
    path: 'any_cover',
    extension: 'jpg'
  },
  dates: [
    {
      type: 'onsaleDate',
      date: 'any_publishedAt'
    }
  ],
  creators: {
    items: [
      {
        role: 'writer',
        name: 'any_writer'
      },
      {
        role: 'penciler',
        name: 'any_penciler'
      },
      {
        role: 'penciller (cover)',
        name: 'any_coverArtist'
      }
    ]
  }
})

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

  it('should call httpClient with correct URL', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: [
          makeFakeComic()
        ]
      }
    }

    await sut.execute({ id: '1' })

    expect(httpClient.url).toBe('/comics/1')
  })

  it('should return a comic on success', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: [
          makeFakeComic()
        ]
      }
    }

    const comic = await sut.execute({ id: '1' })

    expect(comic.id).toBe('1')
    expect(comic.title).toBe('any_title')
    expect(comic.description).toBe('any_description')
    expect(comic.cover).toBe('any_cover.jpg')
    expect(comic.publishedAt).toBe('any_publishedAt')
    expect(comic.writer).toBe('any_writer')
    expect(comic.penciler).toBe('any_penciler')
    expect(comic.coverArtist).toBe('any_coverArtist')
  })

  it('should throw if httpClient returns an error', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.statusCode = 500

    const promise = sut.execute({ id: '1' })

    await expect(promise).rejects.toEqual(new UnexpectedError())
  })
})

export {}
