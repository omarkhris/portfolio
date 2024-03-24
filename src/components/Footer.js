import './FooterStyle.css'

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{
                            color: "#fff",
                            marginRight: "2rem"
                        }} />
                        <div>
                            <p>San Diego, California</p>
                            <p>United States</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <a href="tel:+14422646660"> <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </h4> </a>
                        <div>
                            <a href="tel:+14422646660" style={{ color: "#fff", textDecoration: "none" }}>
                                <p>+1 (442)-2646660</p>
                            </a>
                        </div>
                    </div>

                    <div className='mail'>
                        <a href="mailto:omar.alkhrissat99@gmail.com"> <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </h4></a>
                        <div>
                            <a href="mailto:omar.alkhrissat99@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                                <p>omar.alkhrissat99@gmail.com</p>
                            </a>
                        </div>
                    </div>s
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>

                    </p>
                    <div className='social'>
                        <a href="https://www.facebook.com/omar.khris" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/omarkhris" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/omarkhrissat/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer