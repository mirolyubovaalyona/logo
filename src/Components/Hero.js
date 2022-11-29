import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import hero from './hero.png'

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <img src={hero} className=" img-fluid mx-auto d-block" alt="logo" />
      </Container>
    )
  }
}
