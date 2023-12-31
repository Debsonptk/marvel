import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo1 from 'assets/logo1.png'

import NavegationMenu from 'components/NavegationMenu'

interface IMenuProps {
  handleSearch: (page: number, serach: string) => Promise<void>
}

const Menu: React.FC<IMenuProps> = ({ handleSearch }) => (
  <>
    <div className="bg-dark border-bottom">
      <Container>
        <Link to="/" className="d-flex justify-content-center">
          <img src={logo1} alt="logo" className="img-fluid" />
        </Link>
      </Container>
    </div>
    <NavegationMenu handleSearch={handleSearch} />
  </>
)

export default memo(Menu)
