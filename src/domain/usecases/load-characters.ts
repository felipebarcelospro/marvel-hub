import { MarvelHttpResponse } from '../../data/protocols/http/marvel-http-client'
import { ComicModel } from '../models/comic'

export interface LoadCharactersListDTO {
  titleStartsWith?: number
  limit?: number
  offset?: number
  orderBy?: string
}

export interface LoadCharactersList {
  execute: (params?: LoadCharactersListDTO) => Promise<MarvelHttpResponse<LoadCharactersList.Model[]>>
}

export namespace LoadCharactersList {
  export interface Model {
    id: string
    cover: string
    name: string
    description: string
    comicsCount: number
    comics?: ComicModel[]
  }
}
