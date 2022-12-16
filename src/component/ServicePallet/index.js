import React from 'react'
import './css.css'
import test from './../../assets/img/otherPhotos/1h.png'

const ServicePallet = () => {
  return (
    <div className='servicePallet'>
        <div>
            <img src={test} alt="serviceIcon"/>
        </div>
        <div>
            <h3>РЕФРИЖЕРАТОРНЫЕ АВТОПОЕЗДА</h3>
            <p>33 европаллет, 86 м3 от -20 до +20tб погрузка с любой стороны</p>
        </div>
    </div>
  )
}

export default ServicePallet