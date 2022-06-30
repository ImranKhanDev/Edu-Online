import { Carousel } from "bootstrap";
import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import slider from "../../img/slider-1.jpg";
import slider2 from "../../img/slider-2.jpg";

const Banner = () => {
  return (
    <div className="banner-fluid mb-5" style={{ textTransform: "uppercase" }}>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner inner">
          <div class="carousel-item active">
            <img src={slider} class="d-block img" alt="..." />
            <div class="carousel-caption  d-none d-md-block">
              <div className="caro uppercase">
                <h5>start your favourite course</h5>
                <h1>
                  start your favourite course <br />
                  bright future
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                  tenetur est consequuntur magnam porro nostrum cum! Eos minus
                  quae temporibus?
                </p>

                <div className="banner-btn">
                  <Button className="b1">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block  " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div className="caro uppercase">
                <h5>start your favourite course</h5>
                <h1>
                  start your favourite course <br />
                  bright future
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                  tenetur est consequuntur magnam porro nostrum cum! Eos minus
                  quae temporibus?
                </p>

                <div className="banner-btn">
                  {" "}
                  <Button className="b1">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
