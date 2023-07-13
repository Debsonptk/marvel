import slugify from 'slugify'

import { ThumbnailType } from 'types/ChatacterType'

export const getImageUrl = (thumbnail: ThumbnailType): string =>
  `${thumbnail.path}.${thumbnail.extension}`

export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true,
    trim: true,
  })
