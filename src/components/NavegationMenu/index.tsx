import { memo, useState } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import MenuMobile from 'components/MenuMobile'

interface INavegationMenuProps {
  handleSearch: (page: number, serach: string) => Promise<void>
}

const NavegationMenu: React.FC<INavegationMenuProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  return (
    <nav className="navbar  bg-dark ">
      <Container>
        <div className="w-100 d-flex">
          <MenuMobile />
          <Link className="navbar-brand text-white d-none d-lg-block" to="/">
            Characters
          </Link>
          <Link
            className="navbar-brand text-white d-none d-lg-block"
            to="/comics"
          >
            Comics
          </Link>
          <input
            type="text"
            placeholder=" Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded ms-auto"
          />
          <button
            type="button"
            onClick={() => handleSearch(1, search)}
            className="rounded"
          >
            Search
          </button>
        </div>
      </Container>
    </nav>
  )
}

export default memo(NavegationMenu)
