import { ComicModel } from '../../domain/models/comic'
import { LoadComicsListDTO } from '../../domain/usecases/load-comics'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-client'

export class RemoteLoadComicsList {
  constructor (
    private readonly httpClient: HttpClient<MarvelHttpResponse<ComicModel[]>>
  ) {}

  async execute (params?: LoadComicsListDTO): Promise<MarvelHttpResponse<ComicModel[]>> {
    const httpResponse = await this.httpClient.request({
      url: '/comics',
      method: 'get',
      params: params
    })

    if (httpResponse.statusCode !== HttpStatusCode.ok) {
      throw new Error('Unexpected status code')
    }

    httpResponse.body.data.results = httpResponse.body.data.results.map((comic: any) => {
      return {
        id: comic.id,
        title: comic.title,
        cover: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        publishedAt: comic.dates[0].date,
        writer: comic.creators.items.find(creator => creator.role === 'writer')?.name ?? 'Unknown',
        penciler: comic.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
        coverArtist: comic.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
        description: comic.description
      }
    })

    return httpResponse.body
  }
}
