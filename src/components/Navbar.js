import React, { useState } from 'react'
import "./NavbarStyle.css"
import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa"
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const location = useLocation();
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }
    else setColor(false);
  };
  window.addEventListener("scroll", changeColor);






  return (
    <div className={color ? "header header-bg" :
      "header"}>
      <Link to="/">
        <h1>Omar Alkhrissat</h1>
      </Link>
      <ul className={click ? "nav-men active" : "nav-men"}>
       {/* Conditionally render each navigation link based on current location */}
       <li>
          {location.pathname !== '/' ? (
            <Link to="/">Home</Link>
          ) : (
            <span>Home</span>
          )}
        </li>
        <li>
          {location.pathname !== '/contact' ? (
            <Link to="/contact">Contact</Link>
          ) : (
            <span>Contact</span>
          )}
        </li>
        <li>
          {location.pathname !== '/projects' ? (
            <Link to="/projects">Projects</Link>
          ) : (
            <span>Projects</span>
          )}
        </li>
        <li>
          {location.pathname !== '/about' ? (
            <Link to="/about">About</Link>
          ) : (
            <span>About</span>
          )}
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {!click ? <RxHamburgerMenu size={20} style={{ color: "#fff", background: "#000" }} /> :
          <FaTimes size={20} style={{ color: "#fff", background: "#000" }} />}
      </div>
    </div>


  )
}

export default Navbar