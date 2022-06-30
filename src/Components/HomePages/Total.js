import React from "react";
import { Col, Container, Row } from "react-bootstrap";



const Total = () => {
  return (
    <div
      className="total"
      style={{
        background: "#F0FBFC",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        <Row className="mx-auto">
          <Col className=" col">
            <h2>233+</h2>
            <br />
            <span>COURSES & VIDEOS</span>
          </Col>
          <Col className=" col">
            <h2>410+</h2>
            <br />
            <span>EXPERT TEACHERS</span>
          </Col>
          <Col className=" col">
            <h2>2299+</h2>
            <br />
            <span>TOTAL STUDENTS</span>
          </Col>

          <Col className=" col">
            <h2>368+</h2>
            <br />
            <span>CLASSES COMPLETE</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Total;
