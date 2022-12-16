import React from 'react'
import Experience from '../../container/Experience'
import News from './../../container/News'
import Partners from './../../container/Partners'
import './css.css'

const About = () => {
  return (
    <div className='about'>
        <Experience />
        <Partners />
        <News />
    </div>
  )
}

export default About