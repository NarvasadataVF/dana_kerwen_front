import React from 'react'
import './css.css'
import ServicePallet from '../../component/ServicePallet'
import ServiceMarquee from '../../component/ServiceMarquee'

const Services = () => {
  return (
    <div className='ContainerXl servicePalletHolder'>
        <div>
          <ServicePallet />
          <ServicePallet />
          <ServicePallet />
          <ServicePallet />
          <ServicePallet />
        </div>
        <ServiceMarquee />
    </div>
  )
}

export default Services