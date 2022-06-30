import React from "react";

import Slider from "react-slick";

import teamOne from "../../img/Team-03.jpg";
import teamtwo from "../../img/Team-04.jpg";
import teamthree from "../../img/Team-05.jpg";
import teamFour from "../../img/Team-06.jpg";
import { BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io";
import { AiOutlineSkype, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Teacher = () => {
  return (
    <div>
      <div className="slide py-4">
        <div className="slide-item container text-center">
          <h3>Our Best Teachers</h3>
          <div className="teacher  d-flex justify-content-around text-center align-items-center text-center">
            <div className="content">
              <img
                src={teamOne}
                className="img-style"
                alt="member"
                style={{ height: 240, width: 300 }}
              />
              <h5>Sarah Atkinson</h5>
              <p className="d-flex justify-content-around text-center align-items-center">
                <span>
                  {" "}
                  <BsFacebook size={25} />
                </span>
                <span>
                  {" "}
                  <BsTwitter size={25} />
                </span>
                <span>
                  {" "}
                  <FiLinkedin size={25} />
                </span>
                <span>
                  {" "}
                  <BsYoutube size={25} />
                </span>
              </p>
              <div className="person">
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineStar size={20} />
                  </span>
                  <span>Graphic Designer</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineSkype size={20} />
                  </span>
                  <span>skype@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineMail size={20} />
                  </span>
                  <span>contact@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <BsTelephone size={20} />
                  </span>
                  <span>24070 816 891 254</span>
                </div>
              </div>
            </div>
            <div className="content">
              <img
                src={teamtwo}
                className="img-style"
                alt="member"
                style={{ height: 240, width: 300 }}
              />
              <h5>joakim blo</h5>
              <p className="d-flex justify-content-around text-center align-items-center">
                <span>
                  {" "}
                  <BsFacebook size={25} />
                </span>
                <span>
                  {" "}
                  <BsTwitter size={25} />
                </span>
                <span>
                  {" "}
                  <FiLinkedin size={25} />
                </span>
                <span>
                  {" "}
                  <BsYoutube size={25} />
                </span>
              </p>
              <div className="person">
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineStar size={20} />
                  </span>
                  <span>Graphic Designer</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineSkype size={20} />
                  </span>
                  <span>skype@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineMail size={20} />
                  </span>
                  <span>contact@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <BsTelephone size={20} />
                  </span>
                  <span>24070 816 891 254</span>
                </div>
              </div>
            </div>
            <div className="content">
              <img
                src={teamthree}
                className="img-style"
                alt="member"
                style={{ height: 240, width: 300 }}
              />
              <h5>Edward snow</h5>
              <p className="d-flex justify-content-around text-center align-items-center">
                <span>
                  {" "}
                  <BsFacebook size={25} />
                </span>
                <span>
                  {" "}
                  <BsTwitter size={25} />
                </span>
                <span>
                  {" "}
                  <FiLinkedin size={25} />
                </span>
                <span>
                  {" "}
                  <BsYoutube size={25} />
                </span>
              </p>
              <div className="person">
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineStar size={20} />
                  </span>
                  <span>Graphic Designer</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineSkype size={20} />
                  </span>
                  <span>skype@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineMail size={20} />
                  </span>
                  <span>contact@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <BsTelephone size={20} />
                  </span>
                  <span>24070 816 891 254</span>
                </div>
              </div>
            </div>
            <div className="content">
              <img
                src={teamFour}
                className="img-style"
                alt="member"
                style={{ height: 240, width: 300 }}
              />
              <h5>Alexandar Marsh</h5>
              <p className="d-flex justify-content-around text-center align-items-center">
                <span>
                  {" "}
                  <BsFacebook size={25} />
                </span>
                <span>
                  {" "}
                  <BsTwitter size={25} />
                </span>
                <span>
                  {" "}
                  <FiLinkedin size={25} />
                </span>
                <span>
                  {" "}
                  <BsYoutube size={25} />
                </span>
              </p>
              <div className="person">
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineStar size={20} />
                  </span>
                  <span>Graphic Designer</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineSkype size={20} />
                  </span>
                  <span>skype@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <AiOutlineMail size={20} />
                  </span>
                  <span>contact@eduonline</span>
                </div>
                <div className=" d-flex justify-content-around text-center align-items-center">
                  <span>
                    <BsTelephone size={20} />
                  </span>
                  <span>24070 816 891 254</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
