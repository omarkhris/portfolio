import { Link } from "react-router-dom"
import "./CardExper.css"

import React, { useState } from 'react'
import imgMCIT from '../assets/almanarah_comm__it_co_ltd__logo.jpg'
import imgGCE from '../assets/general_computers_and_electronics_co_logo.jpg'



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
                    
                    <Link className="btn">website</Link>
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
                    
                    <Link className="btn">website</Link>
                </div>
            </div>
        </div>
    )
}

export default CardExper

