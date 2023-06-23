import React from 'react'
import './footer.css'
import {FaPhone,FaMapPin,FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
      <footer>
      <div className="footer">
        <div className="footer-column">
        <img src='https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png' alt='logo' className='logo'/>
        </div>
        <div className="footer-column">
          <h3>Home</h3>
          <ul>
            <li>Why Live101</li>
            <li>About Live101</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Events</h3>
          <ul>
            <li>Wedding</li>
            <li>House Party</li>
            <li>Birthday</li>
            <li>Anniversary</li>
            <li>Cafe</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Live Entertainers</h3>
          <ul>
            <li>Singer</li>
            <li>DJs</li>
            <li>Music Bands</li>
            <li>Muscians</li>
            <li>Comedian</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
            <div><FaPhone/>
                <a>02047170101</a>
            </div>
            </li>
            <li> 
            <div>@<a>tuned@gmail.com</a>
            </div>
            </li>
            <li> 
            <div><FaMapPin/>
                <a>Mumbai:B WING.9TH FLOOR, BUILDINGNO.42, Andheri (West), Mumbai - 400053. (India)</a>
            </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='fotcopy'>
        <p>Copyright ©️ 2018 - 2021 UMW Tech Solutions Private Limited. All rights reserved.</p>
          <ul className='social'>
            <li><FaInstagram/></li>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaYoutube/></li>

          </ul>
      </div>
      </footer>
    );
  
}

export default Footer 