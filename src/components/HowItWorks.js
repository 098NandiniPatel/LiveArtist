import React from 'react'
import './howItWorks.css'
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png'
import i3 from '../assets/i3.png'
import i4 from '../assets/i4.png'
import i5 from '../assets/i5.png'
import i6 from '../assets/i6.png'

const HowItWorks = () => {
  return (
    <div className='how-it-works-main'>
        <a href="" className="how-it-works p-3">Watch the video and learn how live101 is work
            <span>  </span>
        </a>
        <div className='how-title'>
            <h1>Why choose live101</h1>
        </div>
        <div className="row">
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i1} alt="icon1" />
              </div>
              <h6>Fast and secure booking</h6>
              <p>Live101 provides the fastest and most secure way to find and book the appropriate and best entertainer for any event, occasion, or celebration.</p>
            </div>
                
            </div>
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i2} alt="icon1" />
              </div>
              <h6>Exceptional Talent</h6>
              <p>Our seamless talent pool consists of more than 1,400 verified live entertainers. Live101 brings you exceptional talent curated for any event, occasion, or celebration.</p>
            </div>
                
            </div>
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i3} alt="icon1" />
              </div>
              <h6>Efficient Last-Minute Backups</h6>
              <p>"The show must always go on." Efficient last-minute backup guarantee by Live101 ensures you of a delightful celebration without any cancellations or interruptions.</p>
            </div>
                
            </div>
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i4} alt="icon1" />
              </div>
              <h6>No Hidden Charges</h6>
              <p>We believe in transparency, which is why there are no hidden fees. You do not pay for using our platform.</p>
            </div>
                
            </div>
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i5} alt="icon1" />
              </div>
              <h6>Essential Talent Management & Tracking</h6>
              <p>From ensuring that the artist reaches on time to ensuring that the performance is everything you asked for, Live101 leaves you with no room to complain.</p>
            </div>
                
            </div>
            <div className='col'>
            <div className="why-card">
              <div className="why-card-icon">
                <img src={i6} alt="icon1" />
              </div>
              <h6>Easy Cancellation</h6>
              <p>Because your comfort is important to us, we have a simple cancellation policy. We allow easy cancellations with minimal trouble, allowing you to make adjustments to your event with no stress.</p>
            </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default HowItWorks