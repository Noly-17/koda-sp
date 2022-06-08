import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Widgets from "./components/Widgets";
import "./App.scss";

//imported in components folder
import Navbar from "./components/Navbar";

//imported in pages folder
import AllPages from "./pages";
import Home from "./pages/Home";
import About from "./pages/About";
import ViewPages from "./pages/ViewPages";

const App = () => {
  return (
    <Router>
      <Widgets redirect={"/view-pages"} />
      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/view-pages" element={<ViewPages />} />
      </Routes>
    </Router>
  );
};

export default App;
