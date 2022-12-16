import React from 'react'
import './css.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ExperienceRadial = ({ percentage, header, text, maxVal}) => {
  return (
    <div className='experienceRadial'>
        <CircularProgressbar value={percentage} text={`${percentage} ${text}`} maxValue={maxVal} styles={buildStyles({
            strokeLinecap: 'round',
            textSize: '12px',
            pathTransitionDuration: 1,
            pathTransition: 1,
            
            // Colors
            pathColor: `#28a745`,
            textColor: '#acacac',
            trailColor: '#0000001a',
        })}/>
        <h2>{header}</h2>
    </div>
  )
}

export default ExperienceRadial