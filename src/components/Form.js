// import "./Form.css"

import { React, useState } from 'react'
import axios from 'axios';

import './Form2.css'

import img1 from '../assets/arrow_icon.png'
import img2 from '../assets/right_img.png'


// const sendEmail = async (formData) => {
//   try {
//     const response = await axios.post('/send-email', formData);
//     console.log('Email sent:', response.data);
//   } catch (err) {
//     console.error('Error sending email:', err);
//   }
// };



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
      {/* <div className="body">
        <section className="contact">
          <h2>Contact Me!</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="input-box">
              <div className="input-field field">
                <input type="hidden" name="access_key" value="91a2a60c-9203-4233-8829-fc09376b3801" />
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="item"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="error-txt">Name Can't be NULL !!!</div>
              </div>
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Email"
                  id="email" value={formData.email}
                  className="item"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="error-txt">Email Can't be NULL !!!</div>

              </div>
            </div>
            <div className="input-box">
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  value={formData.subject}
                  className="item"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="error-txt">Subject Can't be NULL !!!</div>

              </div>
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="phoneNumber"
                  className="item"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="error-txt">Phone Can't be NULL !!!</div>

              </div>
            </div>


            <div className="textarea-field- field">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Message"
                className="item"
                onChange={handleChange}
              >

              </textarea>
              <div className="error-txt">Message Can't be NULL !!!</div>

            </div>


            <button type="submit">Send Message</button>
          </form>
        </section>
      </div> */}
      {/* <script src="https://smtpjs.com/v3/smtp.js">
      </script>
      <script src="emailNotification.js"></script> */}
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