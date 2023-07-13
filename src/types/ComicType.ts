export type ThumbnailType = {
  extension: unknown
  path: unknown
  thumbnail: {
    path: string
    extension: string
  }
}

export type ComicType = {
  id: number
  title: string
  variantDescription: string
  description: string
  modified: string
  isbn: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  thumbnail: ThumbnailType
}
