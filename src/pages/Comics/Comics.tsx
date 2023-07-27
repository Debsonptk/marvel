import { memo, useCallback, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Lottie from 'react-lottie'

import animationData from 'assets/animation/loading-spider.json'

import { useComics } from 'context/ComicsContext'

import Carrousel from 'components/Carrousel'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import comicslogo from '../../assets/comicsimage.jpeg'
import ironman from '../../assets/ironman.jpeg'
import ironspider from '../../assets/spider.jpeg'
import ComicCard from './ComicCard'
import { Pagination } from './styles'

const carouselItems = [
  {
    image: ironman,
    title: 'Iron Man',
  },
  {
    image: ironspider,
    title: 'Iron Spider',
    subTitle: 'A History of The Iron Spider Suit',
  },
]

const Comics: React.FC = () => {
  const setTitle = useTitle()
  const { comics, isLoading, fetchComics, totalPages, currentPage } =
    useComics()

  const handleChangePage = useCallback(
    (page: number) => fetchComics(page),
    [fetchComics],
  )

  useEffect(() => {
    fetchComics(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('Comics')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Menu handleSearch={fetchComics} />
      <Carrousel items={carouselItems} />
      <Container>
        <div className="d-flex justify-content-center pt-3 pb-3">
          <img src={comicslogo} alt="Comics" className="img-fluid" />
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
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-6 g-4 justify-content-center">
            {comics.map((comic) => (
              <div key={comic.id}>
                <Col className="d-flex">
                  <ComicCard comic={comic} />
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

export default memo(Comics)
