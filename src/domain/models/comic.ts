export interface ComicModel {
  id: number
  title: string
  cover: string
  publishedAt: string
  writer: string
  penciler: string
  coverArtist: string
  description: string
  comics?: this[]
}
