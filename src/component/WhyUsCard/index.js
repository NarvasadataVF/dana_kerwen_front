import React from 'react'
import './css.css'

const WhyUsCard = ({image, header, text}) => {
  return (
    <div className='whyusCard'>
        <img src={image} alt="Why Us"/>
        <h2>{header}</h2>
        <p>{text}</p>
    </div>
  )
}

export default WhyUsCard