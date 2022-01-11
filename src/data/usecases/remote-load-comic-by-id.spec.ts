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
})

export {}
