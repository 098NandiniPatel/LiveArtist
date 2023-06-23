import React from 'react'
import './liveSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {FaStar} from 'react-icons/fa'

const LiveSlider = ({data}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive:[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    //     prevArrow: <SlickArrowLeft />,
    //   nextArrow: <SlickArrowRight />,
      };
      return (
       <div className="card__container">
   <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div
                className="card__container--inner--card"
                key={index}>
                  <div className="artist-section">
                    <div className="artist-img">
                        <img src={item.img} alt='img'width={"188px"}height={"165px"} />
                    </div>
                    <div className="artist-detail">
                        <div className='title'>
                            <p>{item.name}</p>
                            <img src='https://s3.ap-south-1.amazonaws.com/data.com.live101.in/images/category_page/verified-icon.png' alt='mark'/>
                            
                        </div>
                        <div className="detail">
                            <p>{item.type},{item.city}</p>
                        </div>
                        <div className="rating">
                            <div><FaStar/>
                            <p>{item.rating}/0.5 ({item.reviews} reviews)</p>
                            </div>
                            
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
       </div>
         
      );
    }
export default LiveSlider