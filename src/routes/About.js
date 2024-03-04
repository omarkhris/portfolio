import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageContent from '../components/PageContent'

const About = () => {
  return (
    <div>About
      <Navbar />
      <PageContent heading="head" text="text"/>
      <Footer />
    </div>
  )
}

export default About