import { memo } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import logo1 from '../../assets/logo1.png'

const Footer: React.FC = () => (
  <section className="bg-dark ">
    <Container>
      <Row className="justify-content-between">
        <Col className="d-flex">
          <img src={logo1} alt="logo" className="img-fluid" />
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <p className=" text-light">©2023 MARVEL</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default memo(Footer)
