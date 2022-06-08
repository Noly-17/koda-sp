import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

//imported in components folder
import Navbar from "./components/Navbar";

//imported in pages folder
import AllPages from "./pages";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/home" element={<AllPages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
