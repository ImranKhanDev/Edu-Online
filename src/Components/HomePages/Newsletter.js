import React from "react";
import { Button, Container } from "react-bootstrap";
import { MdMessage } from "react-icons/md";
const Newsletter = () => {
  return (
    <div style={{ background: "#f0fbfc", padding: "60px 0px" }}>
      <Container>
        <div className="text-center text-uppercase pricing py-5">
          {" "}
          <h2>SIGN UP TO OUR NEWSLETTER</h2>
          <p className="text-grey">
            Subscribe to our newsletter and get many <br />
            interesting things every week{" "}
          </p>
        </div>
        <div className=" text-center mx-auto">
          <input
            type="text"
            placeholder="YOUR MAIL"
            className="shadow  bg-body "
            style={{ width: "50%", height: "50px" }}
          />
          <button
            className=""
            style={{
              height: "50px",
              width: "150px",

              background: "#06BBCC",
            }}
          >
            <span>
              <MdMessage size={20} />
            </span>{" "}
            <span>SUBSCRIBE</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
