import React, { useState } from 'react'
import './counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
  const[count, setCount] = useState(false)
  return (
    <>
      <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
        <div className="mainCounter">
        <div className="counter one">
          <h1 className='value'>          
            {count && <CountUp start={0} end={8000} duration={2} delay={0} />}+
          </h1>
          <p>Bookings</p>
        </div>
        <div className="counter">
          <h1 className='value'>          
            {count && <CountUp start={0} end={10000} duration={2} delay={0} />}+
          </h1>
          <p>Live Entertainers</p>
        </div>
        <div className="counter">
          <h1 className='value'>          
            {count && <CountUp start={0} end={28} duration={2} delay={0} />}+
          </h1>
          <p>Cities</p>
        </div>
        </div>
      </ScrollTrigger>

    </>
  )
}

export default Counter