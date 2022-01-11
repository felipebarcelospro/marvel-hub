import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { LoadComicsList, LoadComicsListDTO } from '../../domain/usecases/load-comics'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'

export class RemoteLoadComicsList implements LoadComicsList {
  constructor (
    private readonly httpClient: HttpClient<MarvelHttpResponse>
  ) {}

  async execute (params?: LoadComicsListDTO): Promise<LoadComicsList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: '/comics',
      method: 'get',
      params: params
    })

    if (httpResponse.statusCode !== HttpStatusCode.ok) {
      throw new UnexpectedError(httpResponse.statusCode)
    }

    return httpResponse.body.data.results.map((comic: any) => {
      return {
        id: comic.id,
        title: comic.title,
        cover: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        publishedAt: comic.dates[0].date,
        writer: comic.creators.items.find(creator => creator.role === 'writer')?.name ?? 'Unknown',
        penciler: comic.creators.items.find(creator => creator.role === 'penciler')?.name ?? 'Unknown',
        coverArtist: comic.creators.items.find(creator => creator.role === 'penciller (cover)')?.name ?? 'Unknown',
        description: comic.description
      }
    })
  }
}
