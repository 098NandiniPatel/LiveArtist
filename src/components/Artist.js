import React from 'react'
import ContactCard from './ContactCard'
// import Accordian from './Accordian'
import LandingBanner from './LandingBanner'
import './artist.css'
import AppExp from './AppExp'

const Artist = () => {
  return (
    <>
    <div>
      <LandingBanner img="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/artist/banner.png"/>
    </div>
    <section>
        <div className="land-container">
            <div className="land-row">
                <div className="col">
                    <div className="land-content">
                        <h1>Opportunity like never before</h1>
                        <p className='style'>Live 101 is India’s top online network and booking platform for live artists. Craft your online profile, engage with an active community and get more gigs.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="land-img">
                        <h1></h1>
                        <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/artist/opportunity.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="land-container">
            <div className="land-row">
                
                <div className="col">
                    <div className="land-img">
                        <h1></h1>
                        <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/artist/find-job.png" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="land-content">
                        <h1>Find jobs</h1>
                        <p>Live101 Also Features A Job Portal For Those Looking For Opportunities In The Entertainment Industry. With A Wide Range Of Job Prospects, It's An Excellent Way For Artists To Find Work. The Portal Is Safe And Simple To Use, Making It A Beneficial Tool For Artists Looking To Boost Their Careers In Their Industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="land-container">
            <div className="land-row">
                <div className="col">
                    <div className="land-content">
                        <h1>GET ENQUIRIES</h1>
                        <p>Imagine Receiving Enquiries Directly From Potential Clients Interested In Your Services. Live101 Offers A Lucrative Opportunity To Expand And Grow Your Career. With A User-Friendly Interface And Secure Messaging System, We Make It Easy For You To Connect With New Clients And Take Your Passion To The Next Level.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="land-img">
                        <h1></h1>
                        <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/artist/enquiries.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
    <div className="img-back">
    <div className='title-center'>
      <h1>Need Help with Anything?</h1>
    </div>
    <div className='gallery'>
    <div className="z-img">
      <ContactCard />
</div>
    </div>
    </div>
  </section>
  {/* <section className='accordion-section'>
    <Accordian/>
  </section> */}
  <section>
    <AppExp/>
  </section>
  </>
  )
}

export default Artist