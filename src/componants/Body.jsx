import React, { useEffect, useState } from 'react'
import { Button, Container, Row , Col, Image} from 'react-bootstrap'

import black from "../assets/black.png"
import pink from "../assets/pink.png"
import white from "../assets/white.png"
import Donut from './Donut'

const Body = () => {
   const types = 
    [[white , "17", "CREMEY","SQUEZY"], 
    [pink , "30", "strawbery","BUll"],
    [black , "10",  "BULLEIT"," BOURBON"]]
    
    let [index,setIndex] = useState(0)

    function plus() {
        index !== 2 ? setIndex((prev) => prev++) : null
    }
    function minus() {
        index !== 0 ? setIndex((prev) => prev--)  : null
    }
    useEffect(()=>{
        return () => {
            <div>
                <Donut img={types[index][0]} price={types[index][1]} firstname={types[index][2]} lastname={types[index][3]} child={
                    <Col className='controle mt-3 d-flex justify-content-around'>
                        <Button onClick={plus}> dlkdjkl</Button>
                        <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={plus}>next</p>
                        <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={minus}>last</p>
                    </Col>
                }/>
            </div>
        }
    },[index])
  return (
    <Donut img={types[index][0]} price={types[index][1]} firstname={types[index][2]} lastname={types[index][3]} child={
        <Col className='controle mt-3 d-flex justify-content-around'>
            <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={()=>plus()}>next</p>
            <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={()=>minus()}>last</p>
        </Col>
    }/>
  )
}

export default Body