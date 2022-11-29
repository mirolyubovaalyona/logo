import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import foto1 from '../assets/foto1.jpg'

export default class ProductCard extends Component {
  render() {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={foto1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
