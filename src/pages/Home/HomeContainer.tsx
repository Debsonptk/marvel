import { memo } from 'react'

import { CharactersProvider } from 'context/CharactersContext'

import Home from './Home'

const HomeContainer: React.FC = () => {
  return (
    <CharactersProvider>
      <Home />
    </CharactersProvider>
  )
}

export default memo(HomeContainer)
