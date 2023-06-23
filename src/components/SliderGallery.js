import React from 'react'
import './sliderGallery.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderGallery = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
      };
    
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide">
              <img className="rounded-image" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/site_graphics/singer_web.jpg" alt="Image1" />
              <h6>Singer</h6>
            </div>
            <div className="slide">
              <img className="rounded-image" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/site_graphics/music_band_web.jpg" alt="Image2" />
              <h6>Music Band</h6>
            </div>
            <div className="slide">
              <img className="rounded-image" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/site_graphics/dj_web.jpg" alt="Image3" />
              <h6>DJ</h6>
            </div>
            <div className="slide">
              <img className="rounded-image" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/site_graphics/musician_web.jpg" alt="Image4" />
              <h6>Musician</h6>
            </div>
            <div className="slide">
              <img className="rounded-image" src="https://s3.ap-south-1.amazonaws.com/data.com.live101.in/site_graphics/comedian_web.jpg" alt="Image5" />
              <h6>Comedian</h6>
            </div>
          </Slider>
        </div>
      );
    };

export default SliderGallery