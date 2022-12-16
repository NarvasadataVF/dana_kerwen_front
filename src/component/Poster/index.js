import React from 'react'
import './css.css'
import poster1 from './../../assets/img/poster/main1.jpg'
import poster2 from './../../assets/img/poster/main2.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Poster = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,    
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToScroll: 1
  };

  return (
    <div className='posterContainer'>
      <div className='poster'>  
      <Slider {...settings}>
          <div className='posterImg'>            
            <div className='posterContent'>
              <div>
                <h1><span>Dana</span> Kerwen</h1>
                <p>Fugiat ex reprehenderit duis duis sunt. Id non id pariatur tempor id. Nisi do sit aute minim non nulla mollit et sit ad. Ea cillum magna laboris voluptate nostrud anim labore tempor. Aliquip aute irure veniam voluptate elit nostrud aute mollit pariatur. Esse adipisicing aliqua laboris elit officia anim proident aliquip sunt minim.</p>                
                <button>Learn More</button>
              </div>
              <div></div>
            </div>
            <img src={poster1} alt="posterImg"/>
          </div>
          <div className='posterImg'>
            <div className='posterContent'>
              <div>
                <h1><span>Dana</span> Kerwen</h1>
                <p>Fugiat ex reprehenderit duis duis sunt. Id non id pariatur tempor id. Nisi do sit aute minim non nulla mollit et sit ad. Ea cillum magna laboris voluptate nostrud anim labore tempor. Aliquip aute irure veniam voluptate elit nostrud aute mollit pariatur. Esse adipisicing aliqua laboris elit officia anim proident aliquip sunt minim.</p>
                <button>Learn More</button>
              </div>
              <div></div>
            </div>
            <img src={poster2} alt="posterImg"/>
          </div>
      </Slider>
      </div>
    </div>
  )
}

export default Poster