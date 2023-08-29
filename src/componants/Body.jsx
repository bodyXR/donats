import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

import black from "../assets/black.png";
import pink from "../assets/pink.png";
import white from "../assets/white.png";
import Donut from "./Donut";

const Body = () => {
  const types = [
    { img: white, price: "17", firstName: "CREMEY", lastName: "SQUEZY" },
    { img: pink, price: "30", firstName: "strawbery", lastName: "BUll" },
    { img: black, price: "10", firstName: "BULLEIT", lastName: " BOURBON" },
  ];

  const [index, setIndex] = useState(0);

  function plus() {
    console.log("index before plus", index);

    if (index === types.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  }
  function minus() {
    console.log("index before minus", index);

    if (index === 0) {
      setIndex(types.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  }

  return (
    <>
      {console.log("index", types[index])}
      <Donut {...types[index]}>
        <Col className="controle mt-3 d-flex justify-content-around">
          <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={minus}>
            prev
          </p>
          <p className="pt-3 fs-3 controle-btn d-block" lg={6} onClick={plus}>
            next
          </p>
        </Col>
      </Donut>
    </>
  );
};

export default Body;
