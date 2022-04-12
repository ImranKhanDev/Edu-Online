import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Courses.css";
import course1 from "../../img/course-1.jpg";
import course2 from "../../img/course-2.jpg";
import course3 from "../../img/course-3.jpg";
import course4 from "../../img/course-4.jpg";
import course5 from "../../img/course-5.jpg";
import course6 from "../../img/course-6.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Courses = () => {
  return (
    <div className="courses-fluid" style={{ background: "#F0FBFC" }}>
      <Container>
        <div className="courses d-flex justify-content-between align-items-center">
          <div className="courses content">
            <h3 style={{ color: "#181D38" }}>
              ALL COURSES OF <span style={{ color: "#EE8E40" }}>EduOnline</span>
            </h3>
            <p style={{ color: "grey", fontWeight: "400" }}>
              Online learning offers a new way to explore subjects you’re
              passionate about.
            </p>
          </div>
          <div>
            <Button>Read More</Button>
          </div>
        </div>
        <span>
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </span>
        <Row>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    DIGITAL MARKETING | SOCIAL MEDIA MARKETING BUSINESS
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    BUILD BRAND INTO MARKETING: TACKLING NEW MARKETING
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    CULTURE & STRATEGIES FOR A SUCCESSFUL BUSINESS
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    GROW YOUR BUSINESS BY MASTERED IN SOME TECHNIQUE
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    GROW UP AUDIENCE TO PROGRESS BUSINESS
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
            <div className="col shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card ">
                <img src={course6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    JS PROGRAMMING (A-Z)FULLY CLASSES
                  </h5>
                  <p className="card-text d-flex justify-content-between align-items-center">
                    <div> 21 Reviews</div>
                    <div style={{ color: "#EE8C1C" }}>
                      {" "}
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </div>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                      <span>
                        <BsFillPersonFill
                          size={20}
                          style={{ color: "#12BECE" }}
                        />
                      </span>
                      <span>2k+ Students</span>
                    </div>
                    <div>
                      <span>
                        <BiTimeFive size={20} style={{ color: "#12BECE" }} />
                      </span>
                      <span>2h 35mins</span>
                    </div>
                    <div>
                      <div>
                        <span>
                          <AiOutlineStar
                            size={20}
                            style={{ color: "#12BECE" }}
                          />
                        </span>
                        <span>4.5 Reviews</span>
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
