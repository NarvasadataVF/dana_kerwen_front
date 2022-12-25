import React from 'react'
import LogisticsService from '../../container/LogisticsService'
import OrderBlank from '../../container/OrderBlank'
import News from '../../container/News'
import './css.css'

const Logisctics = () => {
  return (
    <div className='logistics'>
        <LogisticsService />
        <OrderBlank />
        {/* <News /> */}
    </div>
  )
}

export default Logisctics