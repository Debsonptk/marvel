import { memo } from 'react'

import { ComicsProvider } from 'context/ComicsContext'

import Comics from './Comics'

const ComicsContainer: React.FC = () => {
  return (
    <ComicsProvider>
      <Comics />
    </ComicsProvider>
  )
}

export default memo(ComicsContainer)
