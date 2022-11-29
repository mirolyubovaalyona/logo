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
                <Nav.Link href="/aboutus">Декларации </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link href="/aboutus">Отзывы </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link href="/aboutus">Контакты </Nav.Link>
              </Col>
              <Col className="text-start p-1" lg="1">
                <Nav.Link href="/aboutus">Outlet </Nav.Link>
              </Col>
              <Col className="text-end " lg="5">
                <h6>
                  <FaVk size="1.7rem" />
                  <FaTelegramPlane size="1.7rem" />
                  <FaYoutube size="1.7rem" />
                </h6>
              </Col>
              <Col className="text-end p-1" lg="1">
                <h6>
                  Написать нам <FaWhatsapp />
                </h6>
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
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="light">Search</Button>
                  </Form>
                </Nav>

                <Nav>
                  <Nav.Link href="#">
                    {' '}
                    <IoPerson size="2rem" color="white" />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/favorites">
                    {' '}
                    <IoHeart size="2rem" color="white" />
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
          </Routes>
        </Router>
      </>
    )
  }
}
