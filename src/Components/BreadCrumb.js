import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default class BreadCrumb extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
