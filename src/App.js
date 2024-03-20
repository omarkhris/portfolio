import React, { useEffect }from "react";

import './index.css'
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import ScrollToTop from "./routes/ScrollToTop";

// import Amplify from 'aws-amplify';
// import awsconfig from 'aws-exports.js';
// Amplify.cofigure(awsconfig);


function App() {


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page whenever the pathname changes
  }, [pathname]);

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
