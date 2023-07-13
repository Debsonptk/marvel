export type ThumbnailType = {
  extension: unknown
  path: unknown
  thumbnail: {
    path: string
    extension: string
  }
}

export type CharacterType = {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: ThumbnailType
  comics: {
    available: number
  }
  series: {
    available: number
  }
  events: {
    available: number
  }
}
