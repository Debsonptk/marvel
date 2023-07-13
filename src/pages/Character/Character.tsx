import { memo, useCallback, useEffect, useState } from 'react'

import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Footer from 'components/Footer'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import Api from 'services/api'

import { CharacterType } from 'types/ChatacterType'

import characterImage from '../../assets/characterimage.jpeg'
import CharacterCardInformations from './CharacterCardInformations'
import { BgImage } from './styles'

const Character: React.FC = () => {
  const setTitle = useTitle()
  const [character, setCharacter] = useState<CharacterType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  const fetchCharacter = useCallback(async (charId: number) => {
    setIsLoading(true)
    try {
      const {
        data: {
          data: { results },
        },
      } = await Api.get(`/characters/${charId}`, {})
      setCharacter(results[0])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    setTitle('Character')
    fetchCharacter(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BgImage>
        <Menu handleSearch={fetchCharacter} />
        <div className="d-flex justify-content-center mt-5 pb-4">
          <img src={characterImage} alt="Character" className="img-fluid " />
        </div>
        {isLoading && (
          <div className="text-center pt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {!isLoading && (
          <Container className="pb-5">
            {character && <CharacterCardInformations character={character} />}
          </Container>
        )}
      </BgImage>
      <Footer />
    </>
  )
}

export default memo(Character)
