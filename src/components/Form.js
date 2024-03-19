import "./Form.css"

import { React, useState } from 'react'


const Form = () => {




  return (
    <>
      <div className="body">
        <section className="contact">
          <h2>Contact Me!</h2>
          <form action="#">
            <div className="input-box">
              <div className="input-field field">
                <input type="text" placeholder="Name" id="name"
                  className="item" autoComplete="off" />
                <div className="error-txt">Name Can't be NULL !!!</div>
              </div>
              <div className="input-field field">
                <input type="text" placeholder="Email" id="email"
                  className="item" autoComplete="off" />
                <div className="error-txt">Email Can't be NULL !!!</div>

              </div>
            </div>
            <div className="input-box">
              <div className="input-field field">
                <input type="text" placeholder="Subject" id="subject"
                  className="item" autoComplete="off" />
                <div className="error-txt">Subject Can't be NULL !!!</div>

              </div>
              <div className="input-field field">
                <input type="text" placeholder="Phone Number" id="phone"
                  className="item" autoComplete="off" />
                <div className="error-txt">Phone Can't be NULL !!!</div>

              </div>
            </div>


            <div className="textarea-field- field">
              <textarea name="message" id="message" cols="30" rows="10"
                placeholder="Your Message" className="item" autoComplete="off"></textarea>
              <div className="error-txt">Message Can't be NULL !!!</div>

            </div>


            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
      <script src="https://smtpjs.com/v3/smtp.js">
      </script>
      <script src="emailNotification.js"></script>
    </>
  )
}

export default Form