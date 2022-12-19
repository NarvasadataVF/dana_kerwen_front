import React from 'react'
import './css.css'

const NewsComponent = ({date, text, color}) => {
  return (
    <div className='newsComponent'>
      <h5>{date}</h5>
      <p style={{color: color}}>{text}</p>
    </div>
  )
}

export default NewsComponent