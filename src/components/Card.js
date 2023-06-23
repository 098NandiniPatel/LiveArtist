import React from 'react'
import './card.css'
const Card = () => {
    return (
        // <div style={{ maxWidth: '300px', textAlign: 'center', margin: '20px' }}>
        //   <img
        //     style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        //     src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/packages/1680589321LIVEMUSIC_SURPRISE_PACKAGE_s.png"
        //     alt="Card"
        //   />
        //   <h2 style={{ margin: '10px 0' }}>Card Title</h2>
        //   <button style={{ padding: '10px 20px' }}>Button</button>
        // </div>
        <div className="card-main">
            <div className="card">
                <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/packages/1680589321LIVEMUSIC_SURPRISE_PACKAGE_s.png" alt="one" />

                <div className="card-detail">
                    <h6>Live music surprise package</h6>
                    <button className='card-btn'>Starting at ₹4999</button>
                </div>
            </div>
            <div className="card">
                <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/packages/1680589321LIVEMUSIC_SURPRISE_PACKAGE_s.png" alt="one" />
                <div className="card-detail">
                    <h6>House party package</h6>
                    <button className='card-btn'>Starting at ₹5999</button>
                </div>
            </div>
            {/* <div className="card">
                <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/event-type/house-party.jpg" alt="one" />
                <div className="card-detail">
                    <h6>House party package</h6>
                    <button className='card-btn'>Starting at ₹5999</button>
                </div>
            </div> */}
            <div className="card">
                <img src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/packages/1680584146Bday.jpg" alt="one" />
                <div className="card-detail">
                    <h6>Kids Birthday package</h6>
                    <button className='card-btn'>Starting at ₹9999</button>
                </div>
            </div>
        </div>
    )
}

export default Card