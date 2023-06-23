import React from 'react'
import LiveSlider from './LiveSlider'
import data from '../data/liveArtist.json'
import HowItWorks from './HowItWorks'
// import Accordian from './Accordian'
import LandingBanner from './LandingBanner'
import AppExp from './AppExp'
const Business = () => {
  return (
    <>
    <div>
      <LandingBanner img="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/landing_page/business/banner.png"/>
    </div>
      <section>
        <div>
          <h1>Trending artists</h1>
          <p>Most reviewed artists</p>
        </div>
        <div className='gallery'>
        <LiveSlider data={data} />
        </div>
      </section>
      <section>
        <HowItWorks/>
      </section>
      {/* <section>
        <Accordian/>
      </section> */}
      <section>
    <AppExp/>
  </section>
    </>
  )
}

export default Business