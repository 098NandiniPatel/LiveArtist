import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return <nav>
    <div className="menuIcon">
        <ul className="navbar-list">
            <li>
                <NavLink className='navbar-link' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/artist'>Artist</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/business'>Business</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/userLogin'>User Login</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
  </nav>
}

export default Navbar