import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

export default class ControlledCarousel extends Component {
  render() {
    return (
      <Container className="h-25 d-inline-block">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={foto1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={foto2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={foto3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
