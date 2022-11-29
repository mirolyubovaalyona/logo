import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ProductCards from '../Components/ProductCards'
import BreadCrumb from '../Components/BreadCrumb'

export default class Сatalog extends Component {
  render() {
    return (
      <Container className="mt-5">
        <BreadCrumb />
        <h1>Каталог</h1>
        <ProductCards />
      </Container>
    )
  }
}
