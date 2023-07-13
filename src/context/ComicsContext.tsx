import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Api from 'services/api'

import { ComicType } from 'types/ComicType'

const limit = 36

interface IContextProps {
  comics: ComicType[]
  isLoading: boolean
  fetchComics: (page: number, search?: string) => Promise<void>
  totalPages: number
  currentPage: number
}

interface IComicsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const ComicsProvider: React.FC<IComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchComics = useCallback(async (page: number, search?: string) => {
    const offset = (page - 1) * limit

    setIsLoading(true)
    setCurrentPage(page)

    const params = {
      offset,
      limit,
      titleStartsWith: search?.length ? search : undefined,
    }

    try {
      const response = await Api.get('/comics', {
        params,
      })
      setComics(response.data.data.results)
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
          comics,
          isLoading,
          fetchComics,
          totalPages,
          currentPage,
        }),
        [comics, currentPage, fetchComics, isLoading, totalPages],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComics must be within MyCustomProvider')
  }

  return context
}
