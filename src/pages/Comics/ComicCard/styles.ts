import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverCardProps {
  coverImage: string
}

export const Cover = styled(Ratio)<ICoverCardProps>`
  background-size: cover;
  background-position: center center;
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  padding-top: 65%;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-15px);
  }
`
