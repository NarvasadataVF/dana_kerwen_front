import React, { useEffect, useState } from 'react'
import { getVacancies } from '../api'

const useVacancies = () => {
  const [vacancies, setVacancies] = useState()

  const getData = async(setFunc) => {
    try{
      const response = await getVacancies()

      setFunc(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData(setVacancies)
  }, [])

  return [vacancies]
}

export default useVacancies