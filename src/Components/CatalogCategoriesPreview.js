import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import CategoryPreviev from './CategoryPreviev'

export default class CatalogCategoriesPreview extends Component {
  render() {
    return (
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        <CategoryPreviev />
        <CategoryPreviev />
        <CategoryPreviev />
        <CategoryPreviev />
        <CategoryPreviev />
        <CategoryPreviev />
      </Row>
    )
  }
}
