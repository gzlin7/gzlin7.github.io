import './index.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const Navbar_G = () => {
  return (
    <Navbar expand="md" sticky="top" style={{ backgroundColor: '#ffe3e3' }}>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>art</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>blog</Nav.Link>
          </LinkContainer>
          {/* <Nav.Link href="#top">About</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_G
