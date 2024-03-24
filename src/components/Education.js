import { Link } from "react-router-dom"
import "./CardExper.css"

import React from 'react'
import imgMIU from '../assets/maharishi_international_university_logo.jpg'
import imgJU from '../assets/JUlogo.jpg'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

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
                    <p className="Cname">Masters In Computer Science</p>
                    <p>Computer Professionals Program</p>
                    <p>Aug.2022-Apr.2025</p>
                    <h4>References :</h4>
                    <p>Prof. Anthony Sander</p>

                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <div>
                            <a href="mailto:asander@miu.edu" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+14084188290" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>
                    <p>Prof. Assad Maalouf</p>

                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <div>
                            <a href="mailto:amaalouf@miu.edu" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+18106737678" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>

                    <a href="https://www.miu.edu/" target="_blank" className="btn">Visit Website</a>
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
                    <h4>References :</h4>
                    <p>Prof. Ahmad Sharieh</p>

                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <div>
                            <a href="mailto:sharieh@ju.edu.jo" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+96265355000" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>
                    <p>Prof. Mohammad Abushariah</p>

                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <div>
                            <a href="mailto:mabushariah@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                        <div>
                            <a href="tel:+96265355000" style={{ color: "#fff", textDecoration: "none" }}>
                                <h4>
                                    <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                </h4>
                            </a>
                        </div>
                    </div>
                    <a href="https://www.ju.edu.jo/" target="_blank" className="btn">Visit Website</a>
                </div>

            </div>
        </div>
    )
}

export default Education