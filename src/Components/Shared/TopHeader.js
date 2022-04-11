import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsTelephone, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import Styles from "../../Components/MainCSS/Styles.css";

const TopHeader = () => {
  return (
    <Navbar className="top-header" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span>
            <BsTelephone />
          </span>
          <span>952 9768653545</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <span>
                <FiMail />
              </span>
              <span>info@eduonline.com</span>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <span>
                <GoLocation />
              </span>
              <span>24th street, California</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsInstagram />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsInstagram />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsTwitter />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
