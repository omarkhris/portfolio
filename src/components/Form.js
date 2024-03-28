import { React, useState } from 'react'
import axios from 'axios';

import './Form2.css'

import img1 from '../assets/arrow_icon.png'
import img2 from '../assets/right_img.png'


const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://nduuygzgid.execute-api.us-east-1.amazonaws.com/et/SESEmail',
        JSON.stringify("020302023;lsfaf"),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Email sent:', response.data);
      // Reset form after successful submission if needed
      setFormData({
        name: "",
        email: "omar.alkhrissat99@gmail.com",
        subject: "",
        phoneNumber: "",
        message: ""
      });
    } catch (err) {
      if (err.response && err.response.status === 500) {
        console.error('Internal server error:', err.response.data);
        // Handle internal server error
      } else
        console.error('Error sending email:', err);
    }
  };



  return (
    <>
     
      <html>

        <head>
          <title>Contact Form</title>
          <link rel='stylesheet' href='Form2.css' />
        </head>
        <body className='body'>
          <div className="contact-container">
            <form id="Form" action="https://api.web3forms.com/submit" method="POST" className="contact-left">
              <div className="contact-left-title">
                <h2>Get in touch</h2>
                <hr />
              </div>
              <input type="hidden" name="access_key" value="91a2a60c-9203-4233-8829-fc09376b3801" />

              <input type="text" name="name" placeholder="Your Name" className="contact-item" required />
              <input type="email" name="email" placeholder="Your email" className="contact-item" required />
              <textarea name="message" placeholder="Your Message ..." className="contact-item" required />
              <button type="submit">Submit <img src={img1} alt="arrow" /></button>
            </form>

            <div className="contact-right">
              <img src={img2} alt="background image"></img>
            </div>
          </div>
        </body>
      </html>


    </>
  )
}

export default Form