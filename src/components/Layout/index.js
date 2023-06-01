import { Outlet } from 'react-router-dom'
import Navbar_G from '../Navbar_G'
import Footer from '../Footer'
import About from '../About'
import ScrollButton from '../ScrollButton'
import './index.scss'
import Container from 'react-bootstrap/Container'

const Layout = () => {
  return (
    <div className="App">
      <div id="top"></div>
      <Navbar_G />
      <Container fluid>
        <About />
        <Outlet />
        <ScrollButton />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
