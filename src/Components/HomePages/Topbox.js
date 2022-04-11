import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { BiWorld } from "react-icons/bi";
import { RiBookletLine } from "react-icons/ri";
const Topbox = () => {
  return (
    <div className="topbox ">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Card className="card-1" style={{ width: "16rem", height: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <BsPerson />
              </Card.Title>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-2" style={{ width: "16rem", height: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <VscBook />
              </Card.Title>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-3" style={{ width: "16rem", height: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <BiWorld />
              </Card.Title>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-4" style={{ width: "16rem", height: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <RiBookletLine />
              </Card.Title>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Topbox;
