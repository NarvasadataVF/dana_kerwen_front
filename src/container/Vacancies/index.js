import React, { useMemo } from 'react'
import VacancyComponent from './../../component/VacancyComponent'
import './css.css'
import useVacancies from '../../utils/hook/useVacancies'
import { useNavigate } from 'react-router-dom'

const Vacancies = () => {

    const [vacancies] = useVacancies()
    const navigate = useNavigate()

    const renderVacancies = useMemo(()=>{
        return vacancies && vacancies.map((elem, i)=>{
            return(
                <div key={i} onClick={()=>{navigate(`/career/vacancy/form/${elem.vacancy.id}`)}}>
                    <VacancyComponent text={elem.title} />                
                </div>
            )
        })
    }, [vacancies])

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
                    {renderVacancies}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vacancies