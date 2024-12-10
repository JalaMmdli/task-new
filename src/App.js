

import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import JobSamples from "./Components/JobSamples";
import PageNotFound404 from "./Components/PageNotFound404";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/jobsamples">JobSamples</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobsamples" element={<JobSamples />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
