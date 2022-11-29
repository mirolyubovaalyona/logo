import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logoWhite from './looWhite.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-3 ">
        <Container fluid>
          <Row className="bg-secondary ">
            <Col className=" py-3">
              <img
                src={logoWhite}
                height="40"
                className="d-inline-block "
                alt="logo"
              />
            </Col>
          </Row>
          <Row className="bg-secondary text-white">
            <Col className="text-center py-3 " md="4">
              <img
                src={logoWhite}
                height="40"
                className="d-inline-block "
                alt="logo"
              />
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
            </Col>
            <Col className="text-center py-3" md="4">
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
            </Col>
            <Col className="text-center py-3" md="4">
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
              <h4>footer</h4>
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
