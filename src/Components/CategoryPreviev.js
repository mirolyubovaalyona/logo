import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import foto3 from '../assets/foto3.jpg'

export default class CategoryPreviev extends Component {
  render() {
    return (
      <Col>
        <Card>
          <Card.Img src={foto3} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className=" w-50 shadow-lg bg-secondary  rounded fs-2 fw-bold text-light text-center m-1 p-2">
              Card title
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Col>
    )
  }
}
