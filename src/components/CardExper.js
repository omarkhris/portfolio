import { Link } from "react-router-dom"
import "./CardExper.css"

import React, { useState } from 'react'
import imgMCIT from '../assets/almanarah_comm__it_co_ltd__logo.jpg'
import imgGCE from '../assets/general_computers_and_electronics_co_logo.jpg'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'




const CardExper = () => {

    return (
        <div className="cardExper">
            <div className="cardContainer">
                <div className="card">
                    <img
                        src={imgMCIT}
                        alt="MCIT_logo"
                        className="icon-about"
                    />
                    <h3>Junior Software Engineer</h3>
                    <span className="bar"></span>
                    <p className="Cname"> Almanarah Comm & IT Co.</p>
                    <p>June.2021-July.2022</p>
                    <h4>Reference :</h4>
                    <p>Senior Software Engineer. Belal Shakhatreh</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <a href="mailto:bshakhatreh@ainnova.com" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+962799155039" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>

                    <a href="http://www.mcit.com.sa" target="_blank" className="btn">Visit Website</a>
                </div>

                <div className="card">
                    <img
                        src={imgGCE}
                        alt="GCE_logo"
                        className="icon-about"
                    />
                    <h3>Software Developer Intern</h3>
                    <span className="bar"></span>
                    <p className="Cname">General Computers & Electronics Co.</p>
                    <p>Nov.2020-May.2021</p>
                    <h4>Reference :</h4>

                    <p>Senior Software Developer. Khalid Omair</p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <a href="mailto:khalidiemir@hotmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+962788833763" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>

                    <a href="https://www.linkedin.com/company/general-computers-and-electronics-co/about/" target="_blank" className="btn">Visit Website</a>
                </div>
            </div>
        </div>
    )
}

export default CardExper

