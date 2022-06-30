import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ background: "#f0fbfc", padding: "60px 0px" }}
    >
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col>
            <ul style={{ listStyle: "none", textDecoration: "none" }}>
              <li className="log">EduOnline</li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptat.
                </p>
              </li>{" "}
              <div className="social">
                <li>
                  {" "}
                  <FaFacebookSquare />{" "}
                </li>{" "}
                <li>
                  {" "}
                  <FaLinkedin />
                </li>
                <li>
                  {" "}
                  <FaTwitterSquare />
                </li>
              </div>
            </ul>
          </Col>
          <Col>
            <ul>
              <h2>Company</h2>
              <li>About Us</li>
              <li>Features</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Our Gallary</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h2>Category</h2>
              <li>All Courses</li>
              <li>Design Courses</li>
              <li>Branding Design</li>
              <li>Business Analytics</li>
              <li>Creative Writing</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h2>Quick Links</h2>
              <li>Privacy Policy</li>
              <li>Discussion</li>
              <li>Terms & Conditions</li>
              <li>Customer Support</li>
              <li>Course FAQ'S </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
