import React from 'react'
import './css.css'
import {VacancyArrow} from './../../assets/img/svg/icons'

const VacancyComponent = ({text}) => {
  return (
    <div className='vacancyComponent'>
        <p>{text}</p>
        <VacancyArrow />
    </div>
  )
}

export default VacancyComponent