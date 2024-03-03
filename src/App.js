import React from "react";

import './index.css'
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";


function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/projects" element = {<Project/>}/>
      </Routes>
    </>
   
  );
}

export default App;
