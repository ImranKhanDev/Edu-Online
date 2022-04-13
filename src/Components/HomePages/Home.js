import React from "react";
import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import Categories from "./Categories";
import Courses from "./Courses";
import Events from "./Events";
import Expert from "./Expert";
import Newsletter from "./Newsletter";
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
      <Events />
      <Blog />
      <Newsletter/>
    </>
  );
};

export default Home;
