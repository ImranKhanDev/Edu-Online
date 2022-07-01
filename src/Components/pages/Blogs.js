import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../img/Blog-01.jpg";
import blog2 from "../../img/Blog-02.jpg";
import blog3 from "../../img/Blog-03.jpg";
import blog4 from "../../img/Blog-04.jpg";
import blog5 from "../../img/Blog-05.jpg";
import blog6 from "../../img/Blog-06.jpg";
import blog7 from "../../img/Blog-07.jpg";
import blog8 from "../../img/Blog-08.jpg";
import te1 from "../../img/side1.jpg";
import te2 from "../../img/side2.jpg";
import te3 from "../../img/side3.jpg";

import prog1 from "../../img/swift.jpg";
import prog2 from "../../img/swift2.jpg";
import prog3 from "../../img/swift3.jpg";

import { BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Blogs = () => {
  return (
    <div className="blog-container mb-4">
      <div className="blog-item">
        <div className="container ">
          <div className="blog-banner content-blog">
            <div
              className="content text-center my-auto
          "
            >
              <h1 className="text-white pt-4">Our Blogs</h1>
              <div>
                {" "}
                <Link
                  to="/"
                  className="home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home{" "}
                </Link>
                <span style={{ color: "white" }}>{""}> Blogs</span>
              </div>
            </div>
          </div>

          <div className="row mt-5 py-5">
            <div className="col-md-9 ">
              <h1>NEWS & BLOG</h1>
              <div className="blog-content">
                <div className="item">
                  <img src={blog1} alt="" style={{ width: 390, height: 250 }} />
                  <div style={{}}>
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog2} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog3} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog4} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog5} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog6} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog7} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={blog3} alt="" style={{ width: 390, height: 250 }} />
                  <div className="">
                    <div>
                      <span>18 JUNE</span>
                    </div>
                    <div className="text-start" style={{ width: "90%" }}>
                      <h6 style={{ marginRight: "25px" }}>
                        Those Other College Expenses You Aren't Thinking About
                      </h6>
                      <p>
                        Thousands of teenagers across the UK will have school
                        lessons in mindfulness in an experiment designed to see
                        if it can protect against mental illness.
                      </p>
                      <p>Posted in : Hobbies</p>
                      <p>Tags : college, eduonline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <p>RECENT POSTS</p>

              <div className="content d-flex justify-content-around align-items-center">
                <img
                  src={blog1}
                  alt=""
                  style={{ width: 120, height: 150, marginRight: 15 }}
                />
                <div>
                  <p>
                    <strong>
                      New Chicago school budget relies on state pension
                    </strong>
                  </p>
                  <p>May 18, 2016</p>
                </div>
              </div>
              <div className="content d-flex justify-content-around align-items-center">
                <img
                  src={blog3}
                  alt=""
                  style={{ width: 120, height: 150, marginRight: 15 }}
                />
                <div>
                  <p>
                    <strong>
                      New Chicago school budget relies on state pension
                    </strong>
                  </p>
                  <p>May 18, 2016</p>
                </div>
              </div>
              <div className="content d-flex justify-content-around align-items-center">
                <img
                  src={blog4}
                  alt=""
                  style={{ width: 120, height: 150, marginRight: 15 }}
                />
                <div>
                  <p>
                    <strong>
                      New Chicago school budget relies on state pension
                    </strong>
                  </p>
                  <p>May 18, 2016</p>
                </div>
              </div>
              <h5>BROWSE BY TEACHER</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                nemo.
              </p>
              <hr />
              <div className="web-teacher">
                <div className="content-item  d-flex justify-content-between align-items-center">
                  <img src={te1} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>LOREN SAMUEL</p>
                    <p>FULL STACK ENGINEER</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <span>
                        <BsFacebook size={15} />
                      </span>
                      <span>
                        <FiLinkedin size={15} />
                      </span>
                      <span>
                        <BsTwitter size={15} />
                      </span>
                      <span>
                        <BsYoutube size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content-item  d-flex justify-content-between align-items-center">
                  <img src={te2} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>LARA CRSOH</p>
                    <p>BACKEND ENGINEER</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <span>
                        <BsFacebook size={15} />
                      </span>
                      <span>
                        <FiLinkedin size={15} />
                      </span>
                      <span>
                        <BsTwitter size={15} />
                      </span>
                      <span>
                        <BsYoutube size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content-item d-flex justify-content-between align-items-center">
                  <img src={te3} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>JAMES WATSON</p>
                    <p>MERN STACK ENGINEER</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <span>
                        <BsFacebook size={15} />
                      </span>
                      <span>
                        <FiLinkedin size={15} />
                      </span>
                      <span>
                        <BsTwitter size={15} />
                      </span>
                      <span>
                        <BsYoutube size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
              </div>

              {/* featured */}
              <h5>Featured Courses</h5>

              <hr />
              <div className="programming">
                <div className="content-item  d-flex justify-content-between align-items-center">
                  <img src={prog1} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>JavaScript Programming for Newbee</p>
                    <p>Sarah John</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <a className="btn" href="/">
                        $170
                      </a>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content-item  d-flex justify-content-between align-items-center">
                  <img src={prog2} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>JavaScript Programming for Newbee</p>
                    <p>Sarah John</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <a className="btn" href="/">
                        $170
                      </a>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content-item d-flex justify-content-between align-items-center">
                  <img src={prog3} alt="" style={{ marginRight: "25px" }} />
                  <div>
                    <p>JavaScript Programming for Newbee</p>
                    <p>Sarah John</p>
                    <p className="d-flex justify-content-between align-items-center">
                      <a className="btn" href="/">
                        $170
                      </a>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                      <span>
                        <AiFillStar style={{ color: "yellow" }} size={15} />
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
