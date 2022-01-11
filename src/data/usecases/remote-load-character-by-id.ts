import { LoadCharacterById, LoadCharacterByIdDTO } from '../../domain/usecases/load-characters-by-id'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { MarvelHttpResponse } from '../protocols/http/marvel-http-client'

export class RemoteLoadCharacterById implements LoadCharacterById {
  constructor (
    private readonly httpClient: HttpClient<MarvelHttpResponse<LoadCharacterById.Model[]>>
  ) {}

  async execute (params?: LoadCharacterByIdDTO): Promise<LoadCharacterById.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/comics',
      method: 'get',
      params: params
    })

    if (httpResponse.statusCode !== HttpStatusCode.ok) {
      throw new Error('Unexpected status code')
    }

    const characterData: any = httpResponse.body.data.results[0]

    if (!characterData) {
      throw new Error('Character not found')
    }

    return {
      id: characterData.id,
      cover: `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`,
      name: characterData.name,
      description: characterData.description,
      comicsCount: characterData.comics.available
    }
  }
}
