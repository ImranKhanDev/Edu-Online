import React from "react";
import About from "./About";
import Banner from "./Banner";
import Categories from "./Categories";
import Courses from "./Courses";
import Expert from "./Expert";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Topbox from "./Topbox";
import Total from "./Total";

const Home = () => {
  return (
    <>
      <Banner />
      <Topbox />
      <About />
      <Total />
      <Categories />
      <Courses />
      <Expert />
      <Pricing />
      <Reviews />
    </>
  );
};

export default Home;
