import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../img/abt-right.jpg";
import Teacher from "./Teacher";

const About = () => {
  return (
    <div className="about-container" style={{ background: "#F0FBFC" }}>
      <div className="about-banner">
        <div
          className="content text-center my-auto
          "
        >
          <h1 className="text-white pt-4">About US</h1>
          <div>
            {" "}
            <Link
              to="/"
              className="home"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home{" "}
            </Link>
            <span style={{ color: "white" }}>{""}> About Us</span>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h1>Welcome to Edu`Online!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              asperiores sint repudiandae assumenda magnam, repellat autem
              veniam modi debitis at?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              asperiores sint repudiandae assumenda magnam, repellat autem
              veniam modi debitis at?
            </p>
            <p> ✅ 2 Glossaries for difficult terms & acronyms</p>
            <p> ✅ 25 hours of High Quality e-Learning content</p>
            <p> ✅ 72 end of chapter quizzes</p>
            <p> ✅ 30 PDUs Offered</p>
            <p> ✅ Collection of 47 six sigma tools for hands-on practice</p>
          </div>
          <div className="col">
            <img src={img1} alt="about-image" style={{ borderRadius: 20 }} />
          </div>
        </div>
      </div>
      {/* counter  */}
      <div className="container">
        <div className="counter-banner  d-flex justify-content-between align-items-center">
          <div className="content-box">
            <h1>23</h1>
            <h5>Years of Experience</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              consequatur.
            </p>
          </div>
          <div className="content-box">
            <h1>59</h1>
            <h5>Numbers Doctors</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              consequatur.
            </p>
          </div>
          <div className="content-box">
            <h1>15</h1>
            <h5>Professionals Awards</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              consequatur.
            </p>
          </div>
          <div className="content-box">
            <h1>
              100 <sup>%</sup>
            </h1>
            <h5>Happy Client</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              consequatur.
            </p>
          </div>
        </div>
      </div>

      {/* teacher section */}
      <div className="container teacher-container">
        <Teacher />
      </div>
    </div>
  );
};

export default About;
