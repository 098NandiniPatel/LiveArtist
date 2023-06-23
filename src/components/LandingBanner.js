import React from 'react'
import './landingBanner.css'
const LandingBanner = ({img}) => {
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
        <div className="landing-banner-right">
            <img src={img} alt="" />
        </div>
    </div>

   
    </>
  )
}

export default LandingBanner