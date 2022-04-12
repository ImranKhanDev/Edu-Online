import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import "./Reviews.css";
import review1 from "../../img/review-1.jpg";
import review2 from "../../img/review-2.jpg";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="review-container">
      <Container>
        <div className="text-center pricing py-5">
          {" "}
          <h2>Customers Reviews </h2>
          <h2>
            What People
            <span style={{ color: "#06BBCC" }}>SAY</span>{" "}
          </h2>
          <p className="text-grey">
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </p>
        </div>
        <Row>
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div>
                  <span style={{ color: "#EE8C1C" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    optio quam tempore ratione in reprehenderit sunt, temporibus
                    dolorum corporis ullam? Ullam repudiandae facere, aspernatur
                    necessitatibus iste rerum quia non tempore alias atque omnis
                    reprehenderit quisquam qui vitae amet quae possimus.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        src={review2}
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <h4>Adam Chase</h4>
                      <h4 style={{}}>Graphic Designer</h4>
                    </div>
                    <div className="quote">
                      <FaQuoteRight size={60} />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <span style={{ color: "#EE8C1C" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    optio quam tempore ratione in reprehenderit sunt, temporibus
                    dolorum corporis ullam? Ullam repudiandae facere, aspernatur
                    necessitatibus iste rerum quia non tempore alias atque omnis
                    reprehenderit quisquam qui vitae amet quae possimus.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        src={review1}
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <h4>Adam Chase</h4>
                      <h4 style={{ color: "#EE8C1C" }}>CEO & FOUNDER</h4>
                    </div>
                    <div className="quote">
                      <FaQuoteRight size={60} />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div>
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    optio quam tempore ratione in reprehenderit sunt, temporibus
                    dolorum corporis ullam? Ullam repudiandae facere, aspernatur
                    necessitatibus iste rerum quia non tempore alias atque omnis
                    reprehenderit quisquam qui vitae amet quae possimus.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        src={review1}
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <h4>Adam Chase</h4>
                      <h4>Graphic Designer</h4>
                    </div>
                    <div className="quote">
                      <FaQuoteRight size={60} />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h1>this is carousel</h1>
                <div>
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    optio quam tempore ratione in reprehenderit sunt, temporibus
                    dolorum corporis ullam? Ullam repudiandae facere, aspernatur
                    necessitatibus iste rerum quia non tempore alias atque omnis
                    reprehenderit quisquam qui vitae amet quae possimus.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        src={review2}
                        style={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <h4>Adam Chase</h4>
                      <h4>Graphic Designer</h4>
                    </div>
                    <div className="quote">
                      <FaQuoteRight size={60} />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
