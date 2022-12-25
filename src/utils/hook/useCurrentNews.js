import React, { useEffect, useState } from 'react'
import { getCurrentNews } from '../api'

const useCurrentNews = (id) => {
  const [currentNews, setCurrentNews] = useState()

  const getData = async(setFunc) => {
    try{
        const response = await getCurrentNews(id)

        setFunc(response.data)
    }catch(err){
        console.log(err)
    }
  }

  useEffect(()=>{
    getData(setCurrentNews)
  }, [])

  return [currentNews]

}

export default useCurrentNews