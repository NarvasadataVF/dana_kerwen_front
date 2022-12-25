import React, { useMemo } from 'react'
import PageHeader from '../../component/PageHeader'
import './css.css'
import useNews from './../../utils/hook/useNews'
import NewsComponent from './../../component/NewsComponent'
import { useNavigate } from 'react-router-dom'

const AllNews = () => {

  const [news] = useNews()
  const navigate = useNavigate()

  const renderNews = useMemo(()=>{
    return news && news.map((elem, i)=>{
      return(
        <div className='newsWrapper' key={i} onClick={()=>{navigate(`/news/${elem.news.id}`)}}>
          <NewsComponent text={elem.title} date={elem.news.date} color="#000"/>
        </div>
      )
    })
  }, [news])

  return (
    <div className='allNews'>
        <PageHeader content={"Новости и события"}/>
        <div className='ContainerXl'>
          <div className='newsHub'>
            {renderNews}
          </div>
        </div>
    </div>
  )
}

export default AllNews