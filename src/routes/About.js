import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageContent from '../components/PageContent'
import CardExper from '../components/CardExper'
import "../components/About.css" 
import Education from '../components/Education'
const About = () => {
  return (
    <div>About
      <Navbar />
      {/* <PageContent heading="head" text="text"/> */}
      <br /><br /><br /><br /><br /><br /><br />
      <h1 id="experience" className='barrier'>Experience</h1>
      <CardExper />
      <h1 className="barrier">Education</h1>
      <Education />
      <Footer />
    </div>
  )
}

export default About