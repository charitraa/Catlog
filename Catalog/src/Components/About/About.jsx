import React from 'react'
import './About.css'
import Boy from '../../assets/boy.jpg'
import saff from '../../assets/saff.jpg'
import man from '../../assets/man.jpg'
import women from '../../assets/women.jpg'

function About () {
  return (
    <>
      <div className='about'>
        <div className='about-content'>
          <div className='about-heading'>Who we are</div>
          <div className='about-paragraph'>
            We are a collaboration of Non Govt. and professionals working to
            ensure that government spending is done fairly, openly, efficiently,
            and creates the best value for money and best outcomes for Europe.
            We are working at the national and EU levels to advance the
            principles of openness in spending of funds, procurement, and
            company ownership within the EU.
          </div>
          <div className='aboutbtn'>
            See more <i className='fa-solid fa-arrow-right'></i>
          </div>
        </div>
        <div className='middle'>
          <div className='about-image'>
            <img src={Boy} alt='Adriana Homolova' />
          </div>
          <div className='about-image1-content'>Adriana Homolova</div>
          <div className='about-image'>
            <img src={saff} alt='Karolis Granickas' />
          </div>
          <div className='about-imag2-content'>Karolis Granickas</div>
        </div>
        <div className='last'>
          <div className='about-image'>
            <img src={man} alt='Sandor Lederer' />
          </div>
          <div className='about-image3-content'>Sandor Lederer</div>
          <div className='about-image'>
            <img src={women} alt='Zara Montgomery' />
          </div>
          <div className='about-imag4-content'>Zara Montgomery</div>
        </div>
      </div>
    </>
  )
}

export default About
