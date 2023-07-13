import { memo } from 'react'

import { getImageUrl } from 'helpers'

import { CharacterType } from 'types/ChatacterType'

import { Card, Cover } from './styles'

interface ICharacterProps {
  character: CharacterType
}

const CharacterCardInformations: React.FC<ICharacterProps> = ({
  character,
}) => {
  return (
    <Card className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <Cover coverImage={getImageUrl(character.thumbnail)}>
            <div />
          </Cover>
        </div>
        <div className="col-md-8">
          <div className="card-body row row-cols-1 row-cols-md-2">
            <div className="col pb-3">
              <h1 className="card-title">{character.name}</h1>
              <h6 className="card-text mb-4">{`#${character.id}`}</h6>
            </div>
            <div className="col pb-3">
              <span>Modified:</span>
              <h5>{new Date(character.modified).toLocaleDateString()}</h5>
            </div>
            <div className="col pb-3">
              <h5>{character.description}</h5>
            </div>
            <div className="col pb-3">
              <span>Comics:</span>
              <h5>{character.comics.available}</h5>
            </div>
            <div className="col pb-3">
              <span>Series:</span>
              <h5>{character.series.available}</h5>
            </div>
            <div className="col pb-3">
              <span>Events:</span>
              <h5>{character.events.available}</h5>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default memo(CharacterCardInformations)
