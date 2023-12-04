import { memo, useCallback, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Lottie from 'react-lottie'

import animationData from 'assets/animation/loading-spider.json'
import avengers from 'assets/banneravengers.png'
import ironman from 'assets/ironman.jpeg'
import spider from 'assets/spider.jpeg'

import { useCharacters } from 'context/CharactersContext'

import Carrousel from 'components/Carrousel'
import CharacterCard from 'components/CharacterCard'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import charactersImage from '../../assets/homeimage.jpeg'
import { Pagination } from './styles'

const carouselItems = [
  {
    image: spider,
    title: 'Spider Man',
    subTitle: 'Friendly Neighborhood',
  },
  {
    image: ironman,
    title: 'Iron Man',
    subTitle: 'Died For Us',
  },
  {
    image: avengers,
    title: 'Avengers',
    subTitle: 'MCU',
  },
]

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { characters, isLoading, fetchCharacters, totalPages, currentPage } =
    useCharacters()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangePage = useCallback(
    (page: number) => fetchCharacters(page),
    [fetchCharacters],
  )

  return (
    <>
      <Menu handleSearch={fetchCharacters} />
      <Carrousel items={carouselItems} />
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <img src={charactersImage} alt="Characters" className="img-fluid " />
        </div>

        {isLoading && (
          <div className="text-center pt-5">
            <Lottie
              options={{
                animationData,
                autoplay: true,
                loop: true,
              }}
              height={450}
              width={450}
            />
          </div>
        )}
        {!isLoading && (
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {characters.map((character) => (
              <div key={character.id}>
                <Col className="d-flex pb-4">
                  <CharacterCard character={character} />
                </Col>
              </div>
            ))}
          </Row>
        )}
        {totalPages > 1 && (
          <Pagination
            forcePage={currentPage - 1}
            nextLabel=">"
            onPageChange={(p: { selected: number }) =>
              handleChangePage(p.selected + 1)
            }
            pageCount={totalPages}
            previousLabel="<"
            marginPagesDisplayed={1}
          />
        )}
      </Container>
      <Footer />
    </>
  )
}

export default memo(Home)
