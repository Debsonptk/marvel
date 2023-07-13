import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/api'

import { CharacterType } from 'types/ChatacterType'

const limit = 36

interface IContextProps {
  characters: CharacterType[]
  isLoading: boolean
  fetchCharacters: (page: number, search?: string) => Promise<void>
  totalPages: number
  currentPage: number
}

interface ICharactersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    const offset = (page - 1) * limit

    setIsLoading(true)
    setCurrentPage(page)

    const params = {
      offset,
      limit,
      nameStartsWith: search?.length ? search : undefined,
    }

    try {
      const response = await Api.get('/characters', {
        params,
      })
      setCharacters(response.data.data.results)
      setTotalPages(Math.ceil(response.data.data.total / limit))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          characters,
          isLoading,
          fetchCharacters,
          totalPages,
          currentPage,
        }),
        [characters, currentPage, fetchCharacters, isLoading, totalPages],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacters must be within MyCustomProvider')
  }

  return context
}
