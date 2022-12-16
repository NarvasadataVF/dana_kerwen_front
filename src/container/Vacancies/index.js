import React from 'react'
import VacancyComponent from './../../component/VacancyComponent'
import './css.css'

const Vacancies = () => {
  return (
    <div className='ContainerXl vacancy'>
        <div>
            <div>
                <div>
                    <h1>Предлагаемые вакансии</h1>
                </div>
                <div>
                        
                </div>
            </div>
            <div>
                <div>
                    <p>In irure irure consectetur Labore ut excepteur aliqua velit deserunt voluptate et Lorem. ipsum aliqua id excepteur anim cillum Lorem. Est mollit nostrud voluptate reprehenderit qui tempor in tempor ea sunt quis excepteur.</p>
                </div>
                <div>
                    <VacancyComponent text={"IT-Specialist"} />
                    <VacancyComponent text={"Professional Lawyer"} />
                    <VacancyComponent text={"Showcase manager"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vacancies