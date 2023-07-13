import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverCardProps {
  coverimage: string
}

export const Cover = styled(Ratio)<ICoverCardProps>`
  background-size: cover;
  background-position: center center;
  background-image: ${({ coverimage }) => `url(${coverimage})`};
`
export const HoverCard = styled.div`
  &:hover {
    background-color: red;
    transition: transform 0.4s;
    transform: scaleY(1.4);
  }
`
