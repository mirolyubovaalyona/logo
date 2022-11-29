import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'

export default class ProductCards extends Component {
  render() {
    return (
      <Row xs={1} md={2} lg={4} className="g-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    )
  }
}
