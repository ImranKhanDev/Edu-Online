import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Navbar.Brand to="/home" style={{cursor:"pointer"}}>EduOnline</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to="/courses"
            >
              Courses
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to="/about"
            >
              About
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to="/blogs"
            >
              blog
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to="/contact"
            >
              contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
