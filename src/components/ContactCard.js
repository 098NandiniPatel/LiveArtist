import React from 'react'
import './contactCard.css'
const ContactCard = () => {
  return (
    <div className="row">
        <div className="contact-main">
        <div className='contact-card'>
            <img src="	https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/help_component/call.webp" alt=""  className='contact-img'/>
            <a href="tel" className='help-info'>
            <i></i>
                <span>Call</span>
            <i></i>
            </a>
        </div>
        <div className='contact-card'>
            <img src="	https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/help_component/whatapp.webp" alt="" className='contact-img'/>
            <a href="" className='help-info'>
                <i></i>
                <span>Whatsapp</span>
                <i></i>
            </a>
        </div>
        <div className='contact-card'>
            <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/help_component/form.webp" alt="" className='contact-img' />
            <a href="" className='help-info'>
                <i></i>
                <span>Enq. Form</span>
                <i></i>
            </a>
        </div>
        </div>
    </div>
  )
}

export default ContactCard