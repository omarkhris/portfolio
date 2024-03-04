import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageContent from '../components/PageContent'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageContent heading="headLine" text="description" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact