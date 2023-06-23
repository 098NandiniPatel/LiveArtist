import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import './header.css'
// import HamburgerNav from './HamburgerNav'

const Header = () => {
  return (
    <header>
      <div className="main-header">
        <div className="header-left">
          <NavLink to="/">
            <img src='https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png' alt='logo' className='logo' />
          </NavLink>
        </div>
        <div className="header-mid">
          <Navbar />
        </div>
        <div className="header-right">

          <button className='header-btn'>Instant Enquiry</button>
          {/* <div className="ham-nav">
      <HamburgerNav/>

      </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header