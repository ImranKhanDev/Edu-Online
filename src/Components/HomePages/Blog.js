import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

import { AiOutlineStar } from "react-icons/ai";
import blogbanner1 from "../../img/blog-banner-1.jpg";
import blogbanner2 from "../../img/blog-banner-2.jpg";
import blogbanner3 from "../../img/blog-banner-3.jpg";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div style={{ background: "#f0fbfc", padding: "60px 0px" }}>
      <Container>
        <div className="text-center text-uppercase pricing py-5">
          {" "}
          <h2>Our Blogs </h2>
          <h2>
            LATEST <span style={{ color: "#06BBCC" }}>BLOG</span> &{" "}
            <span style={{ color: "#06BBCC" }}>EVENTS</span>
          </h2>
          <p className="text-grey">
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          </p>
        </div>

        <Row className="g-4">
          <Col className="">
            <CardGroup className="mx-auto">
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={blogbanner1} />
                <Card.Body>
                  <img
                    src={blog1}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginTop: "-50px",
                      border: "5px solid white",
                    }}
                    alt="blog_member"
                  />
                  <Card.Title>
                    NEW CHICAGO SCHOOL BUDGET RELIES ON PENSION
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                      <Link to="/blogs">Read More</Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={blogbanner2} />
                <Card.Body>
                  <img
                    src={blog2}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginTop: "-50px",
                      border: "5px solid white",
                    }}
                    alt="blog_member"
                  />
                  <Card.Title>IMPORTANCES OF RESEARCH SEMINAR 2021</Card.Title>
                  <Card.Text>
                    <div>
                      <Card.Text>
                        <div className="">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                          </p>
                          <Link to="/blogs">Read More</Link>
                        </div>
                      </Card.Text>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ marginRight: "25px" }}>
                <Card.Img variant="top" src={blogbanner3} />
                <Card.Body>
                  <img
                    src={blog3}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginTop: "-50px",
                      border: "5px solid white",
                    }}
                    alt="blog_member"
                  />
                  <Card.Title>NEWLY SUMMER COURSE STARTS FROM JUNE</Card.Title>
                  <Card.Text>
                    <div className=" text-left">
                      <Card.Text>
                        <div className="text-left">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                          </p>
                          <Link to="/blogs">Read More</Link>
                        </div>
                      </Card.Text>
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

export default Blog;
