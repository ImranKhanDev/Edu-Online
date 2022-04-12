import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Categories.css";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { GiLargePaintBrush } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
const Categories = () => {
  return (
    <div className="categories text-center py-5">
      <Container>
        <div>
          <h4 className="text">Browse Categories</h4>
          <h2>
            BROWSE ONLINE COURSE{" "}
            <span style={{ color: "#06BBCC" }}>CATEGORIES</span>{" "}
            <p>
              //////////////////////////////////////////////////////////////////////////////////////
            </p>
          </h2>
          <Row>
            <Col>
              <div style={{ background: "#fff", padding: "20px 25px" }}>
                <AiOutlineBarChart color="#06bbcc" size={50} />
                <h6>
                  Business &
                  <br /> MANAGEMENT
                </h6>
              </div>
            </Col>
            <Col>
              <div style={{ background: "#fff", padding: "20px 25px" }}>
                <BsCameraVideoFill color="#06bbcc" size={50} />
                <h6>
                  Movie FILM &
                  <br /> MAKING
                </h6>
              </div>
            </Col>
            <Col>
              <div style={{ background: "#fff", padding: "20px 25px" }}>
                <FcSettings color="#06bbcc" size={50} />
                <h6>
                  SOFTWARE &
                  <br /> TRAINING
                </h6>
              </div>
            </Col>
            <Col>
              <div style={{ background: "#fff", padding: "20px 25px" }}>
                <GiLargePaintBrush color="#06bbcc" size={50} />
                <h6>
                  GRAPHIC WEB &
                  <br /> DESIGN
                </h6>
              </div>
            </Col>
            <Col>
              <div style={{ background: "#fff", padding: "20px 25px" }}>
                <FcIdea size={50} color="#06bbcc" />
                <h6>
                  LOCAL
                  <br /> THINKING
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
