import React from 'react'
import  intro  from "../assets/intro-bg.jpg"
import "./IntroPage.css"
import { Link } from 'react-router-dom'
const IntroPage = () => {
  return (
    <div className='intro'>
        <div className='mask'>
             <img 
                className='introImg' src={intro} 
                alt="Intro_page.jpg"
            />
        </div>
        <div className='content'>
            <p>HEllO I am a software engineer</p>
            <h1>I am a react developer</h1>
            <div>
                <Link to={"/projects"} className='btn'
                >Projects</Link>
                <Link to={"/contact"} className='btn'>Contact</Link>
            </div>
        </div>

       
    </div>
  )
}

export default IntroPage