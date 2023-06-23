import React, { useState } from 'react'
import HowItWorks from './HowItWorks'
// import Accordian from './Accordian'
import AppExp from './AppExp'
import './userLogin.css'
const UserLogin = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Mobile Number:', mobileNumber);
        
        setMobileNumber('');
    }
    return (
        <>
            <div className="landing-banner">
                <div className="landing-banner-left">
                    <div className="content">
                        <h1>download the app</h1>
                    </div>
                    <div className="application">
                        <a href="">
                            <img src="	https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/playstore-icon.png" alt="" />
                        </a>
                        <a href="">
                            <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/appstore-icon.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="user-login-right landing-banner-right">
                    <div className="login">
                        <h4 className='login-title'>Get started!</h4>
                        <div className="login-form">
                            <div className="field-login">
                                <label htmlFor="mobileNumber">Phone Number</label>
                                <input
                                    placeholder='Enter Mobile Number'
                                    type="tel"
                                    id="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="remember">
                                <div className="field-login">
                                    {/* <input type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={isChecked ? 'checked' : ''}
        /> */}
                                    <label htmlFor="checkbox1"><div  className="conditions">
                                        By Entering Your Number You Accept Our <a href="#">Terms & Conditions</a>
                                    </div></label>
                                </div>
                            </div>
                            <div className='span-button'>
                                Continue
                            </div>
                            <div className="other-login">
                                <p className="conditions labels">Continue With</p>
                                <ul>
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="data:image/png;base64,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" alt="" />
                                </ul>
                                <p className="conditions">©2018-2021 All Rights Reserved Privacy and Terms</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <HowItWorks />
            </section>
            {/* <section>
                <Accordian />
            </section> */}
            <section>
                <AppExp />
            </section>
        </>
    )
}

export default UserLogin