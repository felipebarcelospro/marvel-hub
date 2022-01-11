import { MarvelHttpResponse } from '../../data/protocols/http/marvel-http-response'

export interface LoadComicsListDTO {
  titleStartsWith?: number
  limit?: number
  offset?: number
  orderBy?: string
  dateRange?: string
  characters?: string
}

export interface LoadComicsList {
  execute: (params?: LoadComicsListDTO) => Promise<MarvelHttpResponse<LoadComicsList.Model[]>>
}

export namespace LoadComicsList {
  export interface Model {
    id: number
    title: string
    cover: string
    publishedAt: string
    writer: string
    penciler: string
    coverArtist: string
    description: string
  }
}
