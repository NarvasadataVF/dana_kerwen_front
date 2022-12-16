import React from 'react'
import Marquee from 'react-easy-marquee'
import tsenet from './../../assets/img/otherPhotos/Tsenet.png'
import garagum from './../../assets/img/otherPhotos/Garagum.png'
import './css.css'

const PartnersMarquee = () => {
  return (
    <div className='partnersMarquee'>
        <Marquee duration={25000}>
            <div className='partnersMarqItem'>
              <img src={tsenet} alt='partnerLogo'/>
            </div>
            <div className='partnersMarqItem'>
              <img src={garagum} alt='partnerLogo'/>
            </div>
            <div className='partnersMarqItem'>
              <img src={tsenet} alt='partnerLogo'/>
            </div>
            <div className='partnersMarqItem'>
              <img src={garagum} alt='partnerLogo'/>
            </div>
        </Marquee>
    </div>
  )
}

export default PartnersMarquee