/* eslint-disable react/no-danger */
import { memo } from 'react'

import { getImageUrl } from 'helpers'

import { ComicType } from 'types/ComicType'

import { Card, Cover } from './styles'

interface IComicProps {
  comic: ComicType
}

const ComicCardInformations: React.FC<IComicProps> = ({ comic }) => {
  return (
    <Card className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <Cover coverImage={getImageUrl(comic.thumbnail)}>
            <div />
          </Cover>
        </div>
        <div className="col-md-8">
          <div className="card-body row row-cols-1 row-cols-md-2">
            <div className="col pb-3">
              <h1 className="card-title">{comic.title}</h1>
              <h6 className="card-text mb-4">{`#${comic.id}`}</h6>
            </div>
            <div className="col pb-3">
              <div dangerouslySetInnerHTML={{ __html: comic.description }} />
            </div>
            <div className="col pb-3">
              <h5>{comic.variantDescription}</h5>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default memo(ComicCardInformations)
