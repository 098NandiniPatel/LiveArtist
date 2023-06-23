import React, { useState } from 'react'
import ContactCard from './ContactCard'
import './contact.css'
import {FaPhone,FaHeadphones,FaFacebook,FaTwitter,FaInstagram,FaWifi} from 'react-icons/fa'

const Contact = () => {

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Nagpur','Pune','Jaipur'];
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Name:', name);
    console.log('City:', city);
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    setName('');
    setCity('');
    setMobileNumber('');
    setEmail('');
    setMessage('');
  }
  return (
    <>
      <section className='banner'>
        <div className="contact-main">
          <div className="contact-row">
            <div className="contact-left">
              <h4 className="contact-title">Contact US</h4>
              <p>Kindly fill the details and we will get back to you</p>
              <div className="touch">
                <div className="touch-container">
                  <div className="touch-title">
                    <h5>Get in touch</h5>
                  </div>
                  <div className="touch-card">
                    <div className="touch-col">
                      <i className='touch-icon'><FaPhone/></i>
                      <h6 className='touch-heading'>Inquiry helpline</h6>
                      <h6 className='touch-para'>02047170101</h6>
                    </div>
                    <div className="touch-col">
                      <i className='touch-icon'><FaHeadphones/></i>
                      <h6 className='touch-heading'>Artist helpline</h6>
                      <h6 className='touch-para'>+919319145394</h6>
                    </div>
                    <div className="touch-col">
                      <i className='touch-icon'>@</i>
                      <h6 className='touch-heading'>Email</h6>
                      <div>
                        <a href="mailto:info@live101.in"className='touch-para' >info@live101.in</a>
                        <br />
                        <a href="mailto:artistmanagement@live101.in" className='touch-para'>artistmanagement@live101.in</a>
                      </div>
                    </div>
                    <div className="touch-col">
                      <i className='touch-icon'><FaWifi/></i>
                      <h6 className='touch-heading'>Follow us</h6>
                      <ul className='cont-follow'>
                        <li><a href="f"><FaFacebook/></a></li>
                        <li><a href="t"><FaTwitter/></a></li>
                        <li><a href="i"><FaInstagram/></a></li>

                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-form">
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col">
                      <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input
                        placeholder='Enter Name here '
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="field-group custom-select">
                        <label htmlFor="city">City</label>
                        <select
                        className='select-style'
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        >
                          <option value="">City</option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="field-group">
                        <label htmlFor="mobileNumber">Mobile</label>
                        <input
                        placeholder='Enter Number here '
                          type="tel"
                          id="mobileNumber"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input
                        placeholder='Your Email ID '
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className=" col-full">
                      <div className="field-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                        placeholder='Enter Message Here '
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                     
                        <button className='header-btn form-btn' type="submit">Submit</button>
                      
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='title-center'>
          <h1>Need Help to make a booking?</h1>
          <p>Send us your basic information and a LIVE101 specialist will get in touch with you and assist you to <br />find & book the best live artist.</p>
        </div>
        <div className='gallery'>
          <ContactCard />

        </div>
      </section>
    </>
  )
}

export default Contact