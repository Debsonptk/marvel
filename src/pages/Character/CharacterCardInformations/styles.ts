import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

interface ICoverCardProps {
  coverImage: string
}

export const Card = styled.div`
  background-color: rgba(60, 62, 68, 0.5);
  color: white;
  width: 100%;
  border: none;
`

export const Cover = styled(Ratio)<ICoverCardProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  padding-top: 55%;
  background-size: cover;
  background-position: center center;
  min-height: 300px;
  background-repeat: no-repeat;
  height: 100%;
`
