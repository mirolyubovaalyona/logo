import React, { Component } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Row,
  Col,
} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { IoPerson, IoHeart, IoCart } from 'react-icons/io5'
import { FaTelegramPlane, FaYoutube, FaWhatsapp, FaVk } from 'react-icons/fa'
import logo from './logo.png'
import Favorites from '../Pages/Favorites'
import Basket from '../Pages/Basket'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Сatalog from '../Pages/Сatalog'
import AboutUs from '../Pages/AboutUs'
import HowToOrder from '../Pages/HowToOrder'
import Declarations from '../Pages/Declarations'
import Contacts from '../Pages/Contacts'


export default class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Container fluid>
            <Row className="bg-dark text-secondary  pt-2">
              <Col className="text-start p-1 " lg="1">
                <Nav.Link as={Link} to="/aboutus">
                  О нас
                </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link as={Link} to="/howtoorder">
                  Как заказать
                </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link as={Link} to="/declarations">Декларации </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link href="https://reviews.yandex.ru/" target='_blank'>Отзывы </Nav.Link>
              </Col>

              <Col className="text-start p-1" lg="1">
                <Nav.Link href="https://www.avito.ru/" target='_blank'>Outlet </Nav.Link>
              </Col>
              <Col xs={4}> </Col>
                <Col >
                  <Nav.Link href="https://vk.com/" target='_blank'><FaVk size="1.7rem"/></Nav.Link>
                  </Col>
                  <Col >
                  <Nav.Link href="https://www.web-telegram.ru/" target='_blank'><FaTelegramPlane size="1.7rem" /></Nav.Link>
                  </Col>
                  <Col >
                  <Nav.Link href="https://www.youtube.com/" target='_blank'><FaYoutube size="1.7rem" /></Nav.Link>
                  </Col>
                
              <Col className="text-end p-1" lg="1">
                <Nav.Link href="https://web.whatsapp.com/" target='_blank'>
                  Написать нам <FaWhatsapp />
                  </Nav.Link>
              </Col>
            </Row>
          </Container>

          <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="secondary"
            variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Каталог" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>

                <Nav>
                  <Nav.Link href="#">
                    {' '}
                    <IoPerson size="2rem" color="white" />
                  </Nav.Link>
                
                  <Nav.Link as={Link} to="/basket">
                    <IoCart size="2rem" color="white" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/basket" element={<Basket />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/catalog" element={<Сatalog />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/howtoorder" element={<HowToOrder />} />
            <Route exact path="/declarations" element={<Declarations />} />
            <Route exact path="/сontacts" element={<Contacts />} />

          </Routes>
        </Router>
      </>
    )
  }
}
