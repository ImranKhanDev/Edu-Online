import "bootstrap/dist/css/bootstrap.min.css";
// import Styles from "../../Components/MainCSS/Styles.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./Components/Shared/Appbar";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/HomePages/Home";
import TopHeader from "./Components/Shared/TopHeader";
function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
