import React from "react";
import Skill from "./Skill";
import Banner from "./Banner";
import Blog from "./Blog";
import Categories from "./Categories";
import Courses from "./Course";
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
      <Skill />
      <Total />
      <Categories />
      <Courses />
      <Expert />
      <Pricing />
      <Reviews />
      <Events />
      <Blog />
      <Newsletter />
    </>
  );
};

export default Home;
