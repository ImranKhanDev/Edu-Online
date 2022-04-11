import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../img/about-right.jpg";
const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm={12} md={8} lg={6}>
            <div className="about-content">
              <h4 style={{ color: "#EE8C1C" }}>ABOUT EduOnline</h4>
              <h1>LEARN SOMETHING NEW, AND GROW YOUR SKILL</h1>
              <p>-------</p>

              <p className="para-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dignissimos, deleniti adipisci ut inventore commodi iure
                explicabo excepturi cumque laudantium quis praesentium id
                nesciunt! Soluta sunt obcaecati aspernatur nostrum ab.
                <br />
                Using our single innovative platform you can remove all your
                communication dependencies and the messy rat’s nest of email,
                calls, texts, wikis, and apps you currently have.
              </p>
              <button className="btn btn btn-view">View Course</button>
            </div>
          </Col>
          <div className="right-animation"></div>
          <Col sm={12} md={4} lg={4}>
            <div className="about-right">
              <img src={img1} className="right-img" alt="about-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
