import React, { useState } from 'react'
import './Home.css'
import logo from '../../assets/logo.png'

const Search = () => {
  return (
    <div className='searchclick'>
      <i className='fa-solid fa-magnifying-glass'></i>
      <input type='search' placeholder='Search' />
    </div>
  )
}

const Down = () => {
  return (
    <div className='dropdown-menu'>
      <div className='section'>
        <i className='fa-solid fa-book'></i>
        <div>
          <div className='container-heading'>Blog</div>
          <div className='container-paragraph'>
            The latest industry news, updates, and info.
          </div>
        </div>
      </div>
      <div className='section'>
        <i className='fa-solid fa-bolt'></i>
        <div>
          <div className='container-heading'>Customer stories</div>
          <div className='container-paragraph'>
            Learn how our customers are making big changes.
          </div>
        </div>
      </div>
      <div className='section'>
        <i className='fa-regular fa-circle-play'></i>
        <div>
          <div className='container-heading'>Video tutorials</div>
          <div className='container-paragraph'>
            Get up and running on new features and techniques.
          </div>
        </div>
      </div>
    </div>
  )
}

function Home () {
  const [searchVisible, setSearchVisible] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const backgroundStyle = searchVisible
    ? { backgroundColor: '#00000099' }
    : {
        background:
          'linear-gradient(180deg, rgba(0, 41, 83, 0.8) 0%, rgba(0, 45, 91, 0.8) 100%)'
      }

  return (
    <div className='home' id='home'>
      <div className='background' style={backgroundStyle}>
        <div className='header'>
          <div className='main'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className={`menus ${menuVisible ? 'active' : ''}`}>
              <a href='#home'>Home</a>
              <a href='#about'>About Us</a>
              <a href='#case-studies'>Case Studies</a>
              <a
                href='#resources'
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                Resources <i className='fa-solid fa-chevron-down'></i>
              </a>
            </div>
            <div
              className='search'
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <div
              className='burger'
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <i className='fa-solid fa-bars'></i>
            </div>
          </div>
        </div>
        {dropdownVisible && <Down />}
        <div className='context'>
          {searchVisible && <Search />}
          <div className='heading'>Beautiful analytics to grow smarter</div>
          <div className='paragraph'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </div>
          <div className='homebtn'>
            Why Catalog? <i className='fa-solid fa-arrow-right'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
