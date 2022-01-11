import { ComicModel } from './comic'

export interface CharacterModel {
  id: string
  cover: string
  name: string
  description: string
  comicsCount: number
  comics?: ComicModel[]
}
