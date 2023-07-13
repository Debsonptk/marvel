import { memo } from 'react'

import { Carousel } from 'react-bootstrap'

import { CarouselStyle } from './styles'

interface ICarouselProps {
  items: {
    image: string
    title: string
    subTitle?: string
  }[]
}

const Carolsel: React.FC<ICarouselProps> = ({ items }) => (
  <Carousel className="w-100">
    {items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Carousel.Item key={index}>
        <img
          className="d-block img-fluid w-100"
          src={item.image}
          alt={item.title}
        />
        <Carousel.Caption>
          <CarouselStyle>
            <h3>{item.title}</h3>
            {item.subTitle && <p>{item.subTitle}</p>}
          </CarouselStyle>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
)

export default memo(Carolsel)
