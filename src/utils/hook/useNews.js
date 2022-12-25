import React, { useEffect, useState } from 'react'
import { getNews } from '../api'

const useNews = () => {
  const [news, setNews] = useState()

  const getData = async(setFunc) => {
    try{
      const response = await getNews()

      setFunc(response.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData(setNews)
  }, [])

  return [news]
}

export default useNews