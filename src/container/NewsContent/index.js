import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import useCurrentNews from '../../utils/hook/useCurrentNews'
import './css.css'
import {baseUrlState} from './../../utils/atom/'
import PageHeader from './../../component/PageHeader'

const NewsContent = () => {
    const {itemId} = useParams()
    const [currentNews] = useCurrentNews(itemId)
    const [url] = useRecoilState(baseUrlState)
    
    console.log(currentNews && currentNews)

  return (
    <>
    <PageHeader content={"Новости и события"}/>
    <div className='ContainerXl newsContent'>
        <div>
            <h5 className='newsDate'>{currentNews && currentNews.news.date}</h5>
            <div className='newsImg'>
                <img src={currentNews && url + currentNews.news.main_image} alt="newsImg"/>
            </div>
            <h1>{currentNews && currentNews.title}</h1>
            <div>
                <p>{currentNews && currentNews.description}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewsContent