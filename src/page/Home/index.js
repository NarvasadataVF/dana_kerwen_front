import React from 'react'
import News from '../../container/News'
import OrderBlank from '../../container/OrderBlank'
import Services from '../../container/Services'
import WeAreDK from '../../container/WeAreDK'
import WhyUs from '../../container/WhyUs'
import './css.css'

const Home = () => {
  return (
    <div>
      <WeAreDK />
      <Services />
      <OrderBlank />
      <WhyUs />
      <News />
    </div>
  )
}

export default Home