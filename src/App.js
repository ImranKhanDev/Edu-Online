import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./Components/Shared/Appbar";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/HomePages/Home";
import TopHeader from "./Components/Shared/TopHeader";
import Courses from "./Components/HomePages/Course";

import Blogs from "./Components/pages/Blogs";
import Contact from "./Components/pages/Contact";
import Skill from "./Components/HomePages/Skill";
import About from "./Components/pages/About";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
