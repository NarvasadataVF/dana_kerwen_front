import React from 'react'
import './css.css'
import logPoster from './../../assets/img/poster/logisticsPoster.jpg'

const LogisticsPoster = () => {
  return (
    <div className='logisticsPoster'>
        <div className='logPosterHolder' />
        <div className='ContainerXl logPosterDescription'>
            <div>
                <div>
                    <h1>200+</h1>
                    <h4>Заказов отработано</h4>
                </div>
                <div>
                    <h1>10+</h1>
                    <h4>Лет на рынке</h4>
                </div>
                <div>
                    <h1>100%</h1>
                    <h4>Надёжденость</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogisticsPoster