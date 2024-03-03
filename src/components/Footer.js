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
                        <h4>
                            <FaPhone size={20} style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }} />
                        </h4>
                        <div>
                            <p>+1 (442)-2646660</p>
                        </div>
                    </div>
                    <div className='mail'>
                        <h4>
                            <FaMailBulk size={20} style={{
                                color: "#fff",
                                marginRight: "2rem"
                            }} />
                        </h4>
                        <div>
                            <p>omar.alkhrissat99@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>Loroumf ofsmfls
                        ldms
                        gmails;lgs

                        gl;ds.
                    </p>
                    <div className='social'>
                        <FaFacebook size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />
                        <FaGithub size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />
                        <FaLinkedin size={30} style={{
                            color: "#fff",
                            marginRight: "1rem"
                        }} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer