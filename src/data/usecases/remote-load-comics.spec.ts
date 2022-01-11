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
})

export {}
