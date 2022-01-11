import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { HttpClientSpy } from '../../main/factories/http/mock-http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'
import { RemoteLoadComicsList } from './remote-load-comics'

interface Sut {
  sut: RemoteLoadComicsList
  httpClient: HttpClientSpy<MarvelHttpResponse>
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

  it('should call httpClient with correct URL', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: []
      }
    }

    await sut.execute()

    expect(httpClient.url).toBe('/comics')
  })

  it('should call httpClient with correct method', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: []
      }
    }

    await sut.execute()

    expect(httpClient.method).toBe('get')
  })

  it('should call httpClient with correct params', async () => {
    const { sut, httpClient } = makeSut()

    const params = {
      offset: 1,
      limit: 2
    }

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: []
      }
    }

    await sut.execute(params)

    expect(httpClient.params).toEqual(params)
  })

  it('should throw a unexpected error if httpClient returns a statusCode diferent of 200', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.statusCode = 500

    const promise = sut.execute()

    await expect(promise).rejects.toEqual(new UnexpectedError())
  })

  it('should return a comic', async () => {
    const { sut, httpClient } = makeSut()

    httpClient.response.body = {
      code: 200,
      status: 'OK',
      data: {
        results: [
          {
            id: 1,
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
          }
        ]
      }
    }

    const comics = await sut.execute()
    const firstComic = comics[0]

    expect(firstComic.id).toBe(1)
    expect(firstComic.title).toBe('any_title')
    expect(firstComic.description).toBe('any_description')
    expect(firstComic.cover).toBe('any_cover.jpg')
    expect(firstComic.publishedAt).toBe('any_publishedAt')
    expect(firstComic.writer).toBe('any_writer')
    expect(firstComic.penciler).toBe('any_penciler')
    expect(firstComic.coverArtist).toBe('any_coverArtist')
  })
})

export {}
