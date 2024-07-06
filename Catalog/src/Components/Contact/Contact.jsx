import React from 'react'
import './Contact.css'

function Contact () {
  return (
    <>
      <div className='contact-main-container'>
        <div className='contact-container'>
          <div className='contact-heading'>Contact Us</div>
          <div className='contact-paragraph'>
            If you have any further inquiries, please let us know by filling the
            form below.
          </div>
          <div className='form'>
            <div className='name'>
              <div className='fname'>
                <label>First Name</label>
                <input />
              </div>
              <div className='lname'>
                <label>Last Name</label>
                <input />
              </div>
            </div>
            <div className='email'>
              <label>Email</label>
              <input />
            </div>
            <div className='message'>
              <label>Message</label>
              <textarea></textarea>
            </div>
            <div className='submitbtn'>
              <div className='subbtn'>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
