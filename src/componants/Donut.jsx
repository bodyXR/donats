import React from 'react'
import { Button, Container, Row , Col, Image} from 'react-bootstrap'

import black from "../assets/black.png"
import pink from "../assets/pink.png"
import white from "../assets/white.png"

const Donut = (props) => {
  return (
    <Container fluid className='w-100 p-5 text-white h-100 black-bg'>
        <Row className='flex-lg-nowrap ps-lg-5 ms-lg-5'>
            <Col>
                <h1 className='mt-5 pt-5 fw-bold'>{props.firstname}<br />{props.lastname}</h1>
                <Col xs={12} md={11}>
                    <p className='fw-light mt-2 d-block w-sm-25 mt-md-5 mb-md-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur expedita repellendus voluptatem corrupti provident. A velit quisquam soluta odit quos.</p>
                </Col>
                <Col>
                    <a className='button mt-2'>add to cart</a>
                    <h3 className='d-inline-block ms-2 me-2 fw-bold'>{props.price}$</h3>
                    <button  className='button button-transparent mt-2'>1</button>
                </Col>
            </Col>
            <Col xs={12} md={6} className='me-lg-5'>
                <Image src={props.img} className='animated w-100 mt-md-5 '/>
            </Col>
        </Row>
       {props.child}
    </Container>
  )
}

export default Donut