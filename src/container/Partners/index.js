import React from 'react'
import PartnersHeader from '../../component/PartnersHeader'
import PartnersMarquee from '../../component/PartnersMarquee'
import './css.css'

const Partners = () => {
  return (
    <div className='partners'>
        <div>
            <PartnersHeader />
            <PartnersMarquee />
        </div>
    </div>
  )
}

export default Partners