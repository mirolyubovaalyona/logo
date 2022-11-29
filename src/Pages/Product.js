import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ControlledCarousel from '../Components/ControlledCarousel'
import LayoutAside from '../Components/LayoutAside'

export default class Product extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col md="1"></Col>
          <Col md="6">
            <ControlledCarousel className="mr-3" />
          </Col>
          <Col md="4">
            <LayoutAside />
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    )
  }
}
