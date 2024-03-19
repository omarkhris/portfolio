import React from 'react'
import Navbar from '../components/Navbar'
import IntroPage from '../components/IntroPage'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Project from './Project'

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroPage />
      {/* <Project /> */}
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home