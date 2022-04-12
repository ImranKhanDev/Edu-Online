import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Pricing.css";
import { BsServer } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const Pricing = () => {
  return (
    <div className="pricing_fluid">
      <Container>
        <div className="text-center pricing py-5">
          {" "}
          <h2>Awesome Packages </h2>
          <h2>
            SIMPLE ALL INCLUSIVE{" "}
            <span style={{ color: "#06BBCC" }}>PRICING</span>{" "}
          </h2>
          <p className="text-grey">
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </p>
        </div>
        <Row className="d-flex justify-content-between align-items-center">
          <Col className="d-flex">
            <div className="price-content bg-white py-5 text-center">
              <BsServer size={50} style={{ marginBottom: "10px" }} />
              <h3 style={{ color: "#F18C1C" }}>RECOMMENDED</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium perspiciatis
              </p>
              <br />
              <h3 style={{ color: "#F18C1C" }}>
                {" "}
                <span style={{ fontSize: "60px" }}>
                  {" "}
                  <sup>$</sup>5.99{" "}
                </span>{" "}
                / <span>Month</span>{" "}
              </h3>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create and host custom content</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create custom learning paths.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Custom Categories.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span>Native courses in English.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> 1time customer support.</span>
              </p>
              <Button
                className="btn"
                style={{ background: "#F18C1C", color: "white" }}
              >
                Read More{" "}
              </Button>
            </div>
            <div className="price-content  py-5 text-center">
              <FiSettings size={50} style={{ marginBottom: "10px" }} />
              <h3 style={{ color: "#06BBCC" }}>STANDARD</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium perspiciatis
              </p>
              <br />
              <h3 style={{ color: "#06BBCC" }}>
                {" "}
                <span style={{ fontSize: "60px" }}>
                  {" "}
                  <sup>$</sup>5.99{" "}
                </span>{" "}
                / <span>Month</span>{" "}
              </h3>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create and host custom content</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create custom learning paths.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Custom Categories.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span>Native courses in English.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> 24/7 customer support.</span>
              </p>

              <Button
                className="btn"
                style={{ background: "#06BBCC", color: "white" }}
              >
                Read More{" "}
              </Button>
            </div>
            <div className="price-content  py-5 text-center">
              <FaRocket
                size={50}
                style={{ marginBottom: "10px", color: "#52565B" }}
              />
              <h3 style={{ color: "#52565B" }}>PREMIUM</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium perspiciatis
              </p>
              <br />
              <h3 style={{ color: "#52565B" }}>
                {" "}
                <span style={{ fontSize: "60px" }}>
                  {" "}
                  <sup>$</sup>5.99{" "}
                </span>{" "}
                / <span>Month</span>{" "}
              </h3>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create and host custom content</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Create custom learning paths.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> Custom Categories.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span>Native courses in English.</span>{" "}
              </p>
              <p>
                <MdOutlineSubdirectoryArrowRight />
                <span> 24/7 customer support</span>
              </p>
              <Button
                className="btn"
                style={{ background: "#52565B", color: "white" }}
              >
                Read More{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
