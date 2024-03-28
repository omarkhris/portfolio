import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageContent from '../components/PageContent'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageContent heading="Contact Me" text={"I enjoy working with dedicated creatives from businesses that codify solutions into services, to contribute with the success of the global village!" }i_img = "" showPicture={false}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact