export interface LoadCharacterByIdDTO {
  id: string
}

export interface LoadCharacterById {
  execute: (params?: LoadCharacterByIdDTO) => Promise<LoadCharacterById.Model>
}

export namespace LoadCharacterById {
  export interface Model {
    id: string
    cover: string
    name: string
    description: string
    comicsCount: number
  }
}
