import { Link } from "react-router-dom"
import "./CardExper.css"

import React from 'react'
import imgMIU from '../assets/maharishi_international_university_logo.jpg'
import imgJU from '../assets/JUlogo.jpg'
const Education = () => {
  return (
    <div className="cardExper">
            <div className="cardContainer">
                <div className="card">
                    <img
                        src={imgMIU}
                        alt="MIU_logo"
                        className="icon-about"
                    />
                    <h3>Maharishi International University</h3>
                    <span className="bar"></span>
                    <p className="Cname">Masters In Computer Sience</p>
                    <p>Computer Professionals Program</p>
                    <p>Aug.2022-Apr.2025</p>
                    <Link className="btn">website</Link>
                </div>
                <div className="card">
                    <img 
                        src={imgJU}
                        alt="JU_logo"
                        className="icon-about"
                    />
                    <h3>University of Jordan</h3>
                    <span className="bar"></span>
                    <p className="Cname">Bachelors In Computer Science</p>
                    <p>Feb.2017-Jan.2020</p>
                   
                    <Link className="btn">website</Link>
                </div>
            </div>
        </div>
  )
}

export default Education