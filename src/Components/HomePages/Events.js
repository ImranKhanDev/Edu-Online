import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./Events.css";
import events1 from "../../img/event-1.jpg";
import events2 from "../../img/event-2.jpg";
import events3 from "../../img/event-3.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Events = () => {
  return (
    <div className="events-fluid">
      <Container>
        <div className="text-center text-uppercase pricing py-5">
          {" "}
          <h2>Our Events </h2>
          <h2>
            Upcoming <span style={{ color: "#06BBCC" }}>Events</span> &{" "}
            <span style={{ color: "#06BBCC" }}>COMPETITIONS</span>
          </h2>
          <p className="text-grey">
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </p>
        </div>

        <Row className="g-4">
          <Col className="d-flex justify-content-around align-items-center g-4">
            <CardGroup className="mx-auto">
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={events1} />
                <Card.Body>
                  <Card.Title>TED TALKS AT UCF COLLEGE OF EDUCATION</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-start align-items-center">
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>30 july</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>9AM</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>Melbourne</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={events2} />
                <Card.Body>
                  <Card.Title>IMPORTANCES OF RESEARCH SEMINAR 2021</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-start align-items-center">
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>30 july</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>9AM</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>Melbourne</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={events3} />
                <Card.Body>
                  <Card.Title>NEWLY SUMMER COURSE STARTS FROM JUNE</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-start align-items-center">
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>30 july</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>9AM</span>
                    </div>
                    <div>
                      <AiOutlineStar size={20} style={{ color: "#80d0d7" }} />
                      <span>Melbourne</span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
