import React, { useState } from 'react'
import './hamburger.css'
import {Divide as Hamburger} from 'hamburger-react'
const HamburgerNav = () => {
    const[isOpen,setOpen]=useState(false)
  return (
    <div className="cover">
        <div className="navbar">
            <Hamburger color="rgb(252,6,108)" toggled={isOpen}
                size="40" rounded toggle={setOpen} 
            />
        </div>
    </div>
  )
}

export default HamburgerNav