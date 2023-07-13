import { memo } from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getImageUrl } from 'helpers'

import { ComicType } from 'types/ComicType'

import { Cover } from './styles'

interface IComicProps {
  comic: ComicType
}

const ComicCard: React.FC<IComicProps> = ({ comic }) => {
  return (
    <Card className="w-100 border-0">
      <Link
        className="text-decoration-none text-black"
        to={`/comics/${comic.id}`}
      >
        <Cover coverImage={getImageUrl(comic.thumbnail)}>
          <div />
        </Cover>
        <div>
          <p className="text-center  pb-2 pt-4">{comic.title}</p>
        </div>
      </Link>
    </Card>
  )
}

export default memo(ComicCard)
