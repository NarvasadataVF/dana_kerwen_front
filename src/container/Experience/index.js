import React from 'react'
import Advantages from '../../component/Advantages'
import ExperienceHeader from '../../component/ExperienceHeader'
import ExperienceRadial from '../../component/ExperienceRadial'
import ServiceMarquee from '../../component/ServiceMarquee'

import './css.css'

const Experience = () => {
  return (
    <div className='ContainerXl experience'>
        <div>
            <ExperienceHeader />
            <div className='radialHolder'>
                <ExperienceRadial percentage={40} maxVal={100} header={'Автопарк'} text={"Авто"} />
                <ExperienceRadial percentage={70} maxVal={100} header={'Визовая поддержка'} text={"Виз"} />
                <ExperienceRadial percentage={40} maxVal={100} header={'Автопарк'} text={"Авто"} />
                <ExperienceRadial percentage={20} maxVal={100} header={'Визовая поддержка'} text={"Виз"} />
            </div>
        </div>
        <ServiceMarquee />
        <div className='ContainerXl'>
            <div>
                <Advantages />
            </div>
        </div>
    </div>
  )
}

export default Experience