import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Appbar = () => {
  return (
    <Navbar
      collapseOnSelect
      className="sticky-top"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">EduOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Courses</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
            <Nav.Link href="#pricing">blog</Nav.Link>
            <Nav.Link href="#pricing">contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
