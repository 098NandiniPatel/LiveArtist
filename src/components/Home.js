import React from 'react'
import ReactPlayer from 'react-player'
import './home.css'
import '../App.css'
import Counter from './Counter'
import SliderGallery from './SliderGallery'
import LiveSlider from './LiveSlider'
import data from '../data/liveArtist.json'
import Card from './Card'
import EventCard from './EventCard'
import ContactCard from './ContactCard'
import HowItWorks from './HowItWorks'

// import { Button } from '@material-ui/core'
const Home = () => {

  return (
    <>
      <section className='banner'>
        <div className="container">
          <div className="left">
            <h1>Book your live <br />artist</h1>
            <h6>Anywhere. Anytime. Any Budget</h6>
          </div>
          <div className="right">
            <Counter />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>Popular enquiries</h1>
          <p>Choose from our most popular categories</p>
        </div>
        <div className='gallery'>
          <SliderGallery />
        </div>
      </section>
      <section>
        <div>
          <h1>Meet Bros.</h1>
          <p>Meet Bros recommend Tuned as the platform to use for booking top-notch
            Artists for your events! Tuned Is Efficient, Simple To Use, And Will Give
            you an Experience like never before!</p>
        </div>
        <div className='video'>
          <ReactPlayer url={"https://youtu.be/EXiHd6s5J-A"} controls={true} width={"100%"} height={"500px"} />
        </div>
      </section>
      <section>
        <div>
          <h1>Featured live artists</h1>
          <p>Premium Artists across the country</p>
        </div>
        <div className='gallery'>
          <LiveSlider data={data} />
        </div>
      </section>
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
        <div className='title-button'>
          <h1>Book for any event</h1>
          <button className='header-btn' >View All</button>
        </div>
        <div className='gallery booksec'>
          <EventCard title="Private Event"
            icon="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/private-event.png"
            background="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/private-event.jpg" />
          <EventCard title="House Party"
            icon="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/house-party.png" 
            background="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/house-party.jpg" />
          <EventCard title="Cafes & lounges"
            icon="	https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/cafe.png"
            background="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/cafe.jpg" />
          <EventCard title="Hotels & villas"
            icon="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/icons/hotel.png"
            background="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/hotel.jpg" />

        </div>
      </section>
      <section>
        <div className='title-button'>
          <h1>Exclusive packages</h1>
          <button className='header-btn'>View All</button>
        </div>
        <div className='gallery'>
          <Card />

        </div>
      </section>
      <section>
        <div className='title-center'>
          <h1>Need Help to make a booking?</h1>
          <p>Send us your basic information and a LIVE101 specialist will get in touch with you and assist you to <br/>find & book the best live artist.</p>
        </div>
        <div className='gallery'>
          <ContactCard />

        </div>
      </section>
      <section>
        <HowItWorks/>
      </section>
      
    </>
  )
}

export default Home