import React from 'react'
import './Resources.css'
import image1 from '../../assets/setting.png'
import image2 from '../../assets/file.png'
import image3 from '../../assets/right.png'
function Resources () {
  return (
    <>
      <div className='resourcess'>
        <div className='resources-container'>
          <div className='resources-heading'>Latest Resources</div>
          <div className='resources-paragraph'>
            The latest resources includes Transparency Toolkit, Evidence , Best
            Practices
          </div>
          <div className='resources-card'>
            <div className='resources-directive'>
              <div className='resources-image1'>
                <div className='im'>
                  <img src={image1} />
                </div>
                <div className='txt'>Tool</div>
              </div>
              <div className='resources-content'>
                <div className='resources-content-heading'>Defence Elvis</div>
                <div className='resources-content-paragraph'>
                  It allows creating networks of public spending on goods
                  services used in defense in 28 EU countries...
                </div>
                <div className='resources-contentbtn'>
                  Learn More <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
            <div className='resources-ownership'>
              <div className='resources-image2'>
                <div className='in'>
                  <img src={image2} />
                </div>
              </div>
              <div className='resources-content'>
                <div className='resources-content-heading'>Defence Elvis</div>
                <div className='resources-content-paragraph'>
                  It allows creating networks of public spending on goods
                  services used in defense in 28 EU countries...
                </div>
                <div className='resources-contentbtn'>
                  Learn More <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
            <div className='resources-recovery'>
              <div className='resources-image3'>
                <div className='io'>
                  <img src={image3} />
                </div>
              </div>
              <div className='resources-content'>
                <div className='resources-content-heading'>Defence Elvis</div>
                <div className='resources-content-paragraph'>
                  It allows creating networks of public spending on goods
                  services used in defense in 28 EU countries...
                </div>
                <div className='resources-contentbtn'>
                  Learn More <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='view'>View All Resources</div>
        </div>
      </div>
    </>
  )
}

export default Resources
