import { memo, useCallback, useEffect, useState } from 'react'

import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Footer from 'components/Footer'
import Menu from 'components/Menu'

import useTitle from 'hooks/useTitle'

import Api from 'services/api'

import { ComicType } from 'types/ComicType'

import comicimage from '../../assets/comicimage.jpeg'
import ComicCardInformarions from './ComicCardInformarions'
import { BgImage } from './styles'

const Comic: React.FC = () => {
  const setTitle = useTitle()
  const [comic, setComic] = useState<ComicType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  const fetchComic = useCallback(async (charId: number) => {
    setIsLoading(true)
    try {
      const {
        data: {
          data: { results },
        },
      } = await Api.get(`/comics/${charId}`, {})
      setComic(results[0])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    setTitle('Comic')
    fetchComic(Number(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BgImage>
        <Menu handleSearch={fetchComic} />
        <div className="d-flex justify-content-center mt-5 pb-4">
          <img src={comicimage} alt="Character" className="img-fluid " />
        </div>
        {isLoading && (
          <div className="text-center pt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        {!isLoading && (
          <Container className="pb-5">
            {comic && <ComicCardInformarions comic={comic} />}
          </Container>
        )}
      </BgImage>
      <Footer />
    </>
  )
}

export default memo(Comic)
