import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageContent from '../components/PageContent'
import CardExper from '../components/CardExper'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>Project

        <Navbar />
        <PageContent  heading="PROJECT." text="Some of my most recent works" />
        <Work />
        <Footer />
    </div>
  )
}

export default Project