import { UnexpectedError } from '../../domain/errors/unexpected-error'
import { LoadCharactersList, LoadCharactersListDTO } from '../../domain/usecases/load-characters'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-response'

export class RemoteLoadCharactersList implements LoadCharactersList {
  constructor (
    private readonly httpClient: HttpClient<MarvelHttpResponse>
  ) {}

  async execute (params?: LoadCharactersListDTO): Promise<LoadCharactersList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: '/characters',
      method: 'get',
      params: params
    })

    if (httpResponse.statusCode !== HttpStatusCode.ok) {
      throw new UnexpectedError()
    }

    return httpResponse.body.data.results.map((character: any) => {
      return {
        id: character.id,
        cover: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        name: character.name,
        description: character.description,
        comicsCount: character.comics.available
      }
    })
  }
}
