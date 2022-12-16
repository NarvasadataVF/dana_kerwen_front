import React from 'react'
import WhyUsCard from '../../component/WhyUsCard'
import './css.css'

import safety from './../../assets/img/otherPhotos/safety.png'
import { useNavigate } from 'react-router-dom'

const WhyUs = () => {

  const navigate = useNavigate()

  return (
    <div className='ContainerXl whyusContainer'>
        <div>
          <div className='whyusHeading'>
            <h1>Почему заказчики выбирают нас</h1>
            <p>Компания стремится удерживать лидерские позиции по соответствию требованиям клиентов</p>
           </div>
           <div className='whyusCardsHolder'>
            <WhyUsCard image={safety} header="Безопасность" text="Перевозка грузов согласно норм при помощи надежной транспортной техники"/>
            <WhyUsCard image={safety} header="Безопасность" text="Перевозка грузов согласно норм при помощи надежной транспортной техники"/>
            <WhyUsCard image={safety} header="Безопасность" text="Перевозка грузов согласно норм при помощи надежной транспортной техники"/>
           </div>
           <div>
            <button onClick={()=>{navigate('/Services/Logistics')}} className='dklButton'>Наши услуги</button>
           </div>
        </div>
    </div>
  )
}

export default WhyUs