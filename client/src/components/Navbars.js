import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import covidImage from '../../src/images/covid-image.png'

function Navbars() {
  return (

<>
  <Navbar bg="" >
    <Container>
    <Navbar.Brand href="#home">
      <img
          src={covidImage}
          width="40"
          height="40"
        /> 
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Navbars
