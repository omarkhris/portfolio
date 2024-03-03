import React, { useState } from 'react'
import "./NavbarStyle.css"
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import {FaTimes} from "react-icons/fa"
const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }
    else setColor(false);
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg": 
    "header"}>
        <Link to="/">
            <h1>Portfoilo</h1>
        </Link>
        <ul className={click ? "nav-men" : "nav-men active"}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/about"}>About</Link></li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click? <RxHamburgerMenu size={20} style={{color : "#fff",background: "#000"}}/>:
             <FaTimes size={20} style={{color : "#fff",background: "#000"}}/>}
            
           
      
        </div>
    </div>


  )
}

export default Navbar