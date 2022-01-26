import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import LocalCalender from "./Component/LocalCalender";
import Home from "./Component/Home";
import "./App.css";
import USCalender from "./Component/USCalender";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/SGCalender">PH Singapore</Link>
        <span> </span>
        <Link to="/USACalender">United States Public Holiday</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SGCalender" element={<LocalCalender />} />
          <Route path="/UsaCalender" element={<USCalender />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
