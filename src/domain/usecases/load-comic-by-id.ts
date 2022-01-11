export interface LoadComicByIdDTO {
  id: string
}

export interface LoadComicById {
  execute: (params?: LoadComicByIdDTO) => Promise<LoadComicById.Model>
}

export namespace LoadComicById {
  export interface Model {
    id: number
    title: string
    cover: string
    publishedAt: string
    writer: string
    penciler: string
    coverArtist: string
    description: string
    comics: this[]
  }
}
