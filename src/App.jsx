import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import LocalCalender from "./Component/LocalCalender";
import Home from "./Component/Home";
import "./App.css";
import World from "./Component/World";



function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/SGCalender">PH Singapore</Link>
        <span> </span>
        <Link to="/World-PH">Worldwide Public Holiday</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/SGCalender" element={<LocalCalender/>} />
          <Route path="/World-PH" element={<World/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
