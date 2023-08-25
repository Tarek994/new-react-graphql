import { HashRouter as Router, Routes, Route, useLocation,
  Navigate, } from "react-router-dom";
  import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div id="section-1"></div>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;