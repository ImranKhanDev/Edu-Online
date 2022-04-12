import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Expert.css";
import team1 from "../../img/team-1.jpg";
import team2 from "../../img/team-2.jpg";
import team3 from "../../img/team-3.jpg";
import team4 from "../../img/team-4.jpg";

const Expert = () => {
  return (
    <div className="expert-fluid">
      <Container>
        <div className="text-center expert py-5">
          {" "}
          <h2>Meet Our Instructors </h2>
          <h2>
            LEARN FROM EXPERT{" "}
            <span style={{ color: "#06BBCC" }}>INSTRUCTORS</span>{" "}
          </h2>
          <p>
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </p>
        </div>
        <Row className="d-flex team_member">
          <Col className="d-flex justify-content-around align-items-center">
            <div>
              <img
                src={team1}
                alt="team_memeber"
                // style={{ width: "350px", height: "340px" }}
              />
              <div className="bg-white p-2">
                <h5>Wiliam Smith</h5>
                <h5 style={{ color: "#EE8C1C" }}>CEO/FOUNDER</h5>
              </div>
            </div>
            <div>
              <img
                src={team2}
                alt="team_member"
                // style={{ width: "350px", height: "340px" }}
              />
              <div className="bg-white p-2">
                <h5>Nicole kyle</h5>
                <h5 style={{ color: "#EE8C1C" }}>Product Manager</h5>
              </div>
            </div>
            <div>
              <img
                src={team3}
                alt="team_member"
                // style={{ width: "350px", height: "340px" }}
              />
              <div className="bg-white p-2">
                <h5>John Milton</h5>
                <h5 style={{ color: "#EE8C1C" }}>Instructor</h5>
              </div>
            </div>
            <div>
              <img
                src={team4}
                alt="team_member"
                // style={{ width: "350px", height: "340px" }}
              />
              <div className="bg-white p-2">
                <h5>Ketti Helson</h5>
                <h5 style={{ color: "#EE8C1C" }}>Business analyst</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expert;
