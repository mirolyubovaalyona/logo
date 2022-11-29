import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../Components/Hero'
import CatalogCategoriesPreview from '../Components/CatalogCategoriesPreview'

export default class Home extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Hero />
        <CatalogCategoriesPreview />
      </Container>
    )
  }
}
