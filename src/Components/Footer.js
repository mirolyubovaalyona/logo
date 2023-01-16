import React, { Component } from 'react'
import logoWhite from './looWhite.png'
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

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-3 ">
        <Container fluid>
          <Row className="bg-secondary ">
            <Col className=" py-3">
            <Nav.Link href="/" ><img
                src={logoWhite}
                height="40"
                className="d-inline-block "
                alt="logo"
              /></Nav.Link>
            </Col>
          </Row>
          <Row className="bg-secondary text-white">
            <Col className="text-center py-3 " md="4">
            <Nav.Link href="/" ><img
                src={logoWhite}
                height="40"
                className="d-inline-block "
                alt="logo"
              /></Nav.Link>
              <Nav.Link href="/aboutus" >О нас</Nav.Link>
              <Nav.Link href="/Declarations" >Декларации</Nav.Link>
              <Nav.Link href="/HowToOrder" >Как заказать</Nav.Link>
            </Col>
            <Col className="text-center py-3" md="4">
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
            </Col>
            <Col className="text-center py-3" md="4">
            <Nav.Link href="https://vk.com/" target='_blank'><FaVk size="1.7rem"/></Nav.Link>
            <Nav.Link href="https://www.web-telegram.ru/" target='_blank'><FaTelegramPlane size="1.7rem" /></Nav.Link>
            <Nav.Link href="https://www.youtube.com/" target='_blank'><FaYoutube size="1.7rem" /></Nav.Link>
            <Nav.Link href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp size="1.7rem" /></Nav.Link>
            </Col>
          </Row>
          <Row className="bg-dark text-secondary">
            <Col className="text-end">
              <h3>Copyright © 2022 LoGo</h3>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
