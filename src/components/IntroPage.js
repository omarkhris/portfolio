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
            <p></p>
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