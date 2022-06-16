import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/home";
import AboutUs from "./components/About-Us/about-us";
import Careers from "./components/Careers/careers";
import OurOfferings from "./components/Our-Offerings/our-offerings";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-offerings" element={<OurOfferings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
