import React from 'react'
import intro from "../assets/intro-bg.jpg"
import "./IntroPage.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
const IntroPage = () => {

  const downLoadResume = (url) => {
    const aTag = document.createElement('a')
    aTag.href = url;
    aTag.setAttribute('download', '');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  const [showResume, setShowResume] = useState(false);

  const handleButtonClick = () => {
    window.open("https://omaresume.s3.amazonaws.com/OMARALRESUME.pdf", "_blank");
  };

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={"/projects"} className='btn'
          >Projects</Link>
          {/* <Link to={"/contact"} className='btn'>Contact</Link> */}
          <button className='btn' onClick={() => {
            const target = document.getElementById('target');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' }
            )
          }}>About me</button>
          <button onClick={handleButtonClick} className='btn'>Resume</button>
        </div>
      </div>


    </div>
  )
}

export default IntroPage