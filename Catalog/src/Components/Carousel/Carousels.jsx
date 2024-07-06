import React from 'react'
import './Carousel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'

const Carousels = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  const icons = [icon1, icon2, icon3, icon4, icon5]
  return (
    <div className='carousel'>
      <div className='carousel-container'>
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass='carousel-item-padding-40-px'
        >
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt='Icon' />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Carousels
