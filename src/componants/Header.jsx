import React from 'react'
import {Container, Image, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
      <Navbar expand="lg" className='position-absolute ps-lg-5'>
        <Container >
            <h2 href="#" className='m-4 p-3 ps-lg-5 ms-lg-5 text-white fs-2 '>Donatello</h2>
        </Container>
      </Navbar>
  )
}

export default Header