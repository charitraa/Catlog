import React from 'react'
import Home from './Home/Home.jsx'
import Campaign from './Campaign/Campaign.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from './Footer/Footer.jsx'
import Resource from './Resources/Resources.jsx'
import Carousel from './Carousel/Carousels.jsx'
import About from './About/About.jsx'
import News from './News/News.jsx'
function Index (props) {
  return (
    <>
      <Home />
      <Campaign />
      <About />
      <Carousel />
      <News />
      <Resource />
      <Contact />
      <Footer />
    </>
  )
}

export default Index
