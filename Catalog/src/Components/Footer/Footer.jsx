import React from 'react'
import './Footer.css'
import footerimage from '../../assets/logo.png'
import image from '../../assets/image.png'

function Footer () {
  return (
    <>
      <div className='footer'>
        <div className='footer-background'>
          <div className='background-color'>
            <div className='footer-main'>
              <div className='left'>
                <div className='footer-logo'>
                  <img src={footerimage} alt='Footer Logo' />
                </div>
                <div className='footer-paragraph'>
                  We are a collaboration of non-government organisation and
                  professionals working to ensure that government spending.
                </div>
                <div className='social'>
                  <div className='twitter'>
                    <i className='fa-brands fa-twitter'></i>
                  </div>
                  <div className='linkedin'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </div>
                  <div className='youtube'>
                    <i className='fa-brands fa-youtube'></i>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='link'>
                  <div className='links'>Links</div>
                  <div className='list'>
                    <div>Campaigns</div>
                    <div>Resource</div>
                    <div>News</div>
                    <div>About Us</div>
                  </div>
                </div>
                <div className='resource'>
                  <div className='resources'>Resources</div>
                  <div className='list'>
                    <div>Transparency Toolkit</div>
                    <div>Edivence</div>
                    <div>Best Practices</div>
                  </div>
                </div>
                <div className='work'>
                  <div className='works'>Work with Us</div>
                  <div className='list'>
                    <div>Contact Us</div>
                    <div>Join Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copy'>
        <div className='terms'>Terms and Conditions</div>
        <div className='right-term'>
          <div className='creative'>
            <img src={image} alt='Creative Logo' />
          </div>
          <div className='goup'>
            <a href='#home'>
              <i className='fa-solid fa-arrow-up'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
