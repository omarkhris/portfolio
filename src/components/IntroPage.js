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
            <p></p>
            <h1>Hello World!</h1>
            <p>I am a software engineer with 2 years of professional experience in software development. I've had the opportunity to work on various projects in the e-commerce business domain, utilizing the latest technologies to deliver back-end components, RESTful APIs, and front-end interfaces.</p>
            <div>
                <Link to={"/projects"} className='btn'
                >Projects</Link>
                <Link to={"/contact"} className='btn'>Contact</Link>
                <button className='btn' onClick={()=>{
                  const target = document.getElementById('target');
                  target.scrollIntoView({behavior: 'smooth', block: 'start'}
                  
                   )
                }}>About me</button>
            </div>
        </div>

       
    </div>
  )
}

export default IntroPage