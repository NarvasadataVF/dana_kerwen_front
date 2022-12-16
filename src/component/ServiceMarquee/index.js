import React from 'react';
import './css.css';
import Marquee from "react-easy-marquee";

const ServiceMarquee = () => {
  return (
    <div className="serviceMarquee">
        <Marquee duration={25000} >
            <span className='marqItem'>Автопарк более 1500 автопоездов</span>
            <span className='marqItem'>Профессиональная мотивированная команда</span>            
            <span className='marqItem'>Работаем 24/7</span>
        </Marquee>
        <Marquee duration={30000} reverse={true} >
            <span className='marqItem'>Профессиональная мотивированная команда</span>            
            <span className='marqItem'>Современная европейская техника </span>
            <span className='marqItem'>Работаем 24/7</span>
        </Marquee>
    </div>
  )
}

export default ServiceMarquee;