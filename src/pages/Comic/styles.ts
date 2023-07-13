import styled from 'styled-components'

import bgAvengers from '../../assets/avengers.jpeg'

export const BgImage = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${bgAvengers});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px); /* Adicionar o efeito de desfoque */
    z-index: -1;
  }
`
