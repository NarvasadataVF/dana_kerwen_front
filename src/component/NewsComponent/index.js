import React from 'react'
import './css.css'

const NewsComponent = ({date, text}) => {
  return (
    <div className='newsComponent'>
      <h5>{date}</h5>
      <p>{text}</p>
    </div>
  )
}

export default NewsComponent