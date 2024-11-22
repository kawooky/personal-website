import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
