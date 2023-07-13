import { memo } from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getImageUrl } from 'helpers'

import { CharacterType } from 'types/ChatacterType'

import { Cover, HoverCard } from './styles'

interface ICharacterCardProps {
  character: CharacterType
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <Card className="w-100 bg-dark">
      <Link
        className="text-decoration-none text-black"
        to={`/characters/${character.id}`}
      >
        <Cover aspectRatio="1x1" coverimage={getImageUrl(character.thumbnail)}>
          <div />
        </Cover>
        <HoverCard>
          <Card.Title className="text-center text-white pb-2 pt-2">
            {character.name}
          </Card.Title>
        </HoverCard>
      </Link>
    </Card>
  )
}

export default memo(CharacterCard)
