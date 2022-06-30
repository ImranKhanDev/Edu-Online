import React from "react";
import { BsYoutube, BsTwitter, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="contact" style={{ background: "#F0FBFC" }}>
      <div className="container text-center mx-auto">
        <h1>Get In Touch</h1>
        <p>
          Get In Touch Knock us at any time of the day and hire us for quality
          and timely work <br /> within your budget.
          <br /> If you need an NDA for your project, feel free to contact us.
        </p>
        <div className="contact-box d-flex justify-content-between align-items-center">
          <div className="box mail">
            <span className="box-icon">
              <AiOutlineMail size={20} />
            </span>
            <p className="mt-3">
              <strong className="mt-3">Email</strong>
            </p>
            <p>
              <strong>hello@eduonline.com</strong>
            </p>
          </div>
          <div className="box facebook">
            <span className="box-icon">
              <BsFacebook size={20} />
            </span>
            <p className="mt-3">
              <strong>Facebook</strong>
            </p>
            <p>
              <strong>facebook.com/eduonline</strong>
            </p>
          </div>
          <div className="box twit">
            <span className="box-icon">
              <BsTwitter size={20} />
            </span>
            <p className="mt-3">
              <strong>Twitter</strong>
            </p>
            <p>
              <strong>twiter.com/eduonline</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
