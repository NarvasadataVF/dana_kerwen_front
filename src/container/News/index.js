import React, { useMemo } from 'react'
import NewsComponent from '../../component/NewsComponent'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './css.css'
import { useNavigate } from 'react-router-dom';
import useNews from './../../utils/hook/useNews'

const News = () => {

    const navigate = useNavigate()
    const [news] = useNews()

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,    
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToScroll: 1
      };

    const renderNews = useMemo(()=>{
        const slicedNews = news && news.slice(0, 5);
        return slicedNews && slicedNews.map((elem, i)=>{
            return(
                <div key={i} onClick={()=>{navigate(`/news/${elem.news.id}`)}}>
                    <NewsComponent color="#fff" date={elem.news.date} text={elem.title}/>
                </div> 
            )
        })
    }, [news])

  return ( 
    <div className='ContainerXl news'>
        <div>
            <h1>Новости и события</h1>
            <Slider {...settings}>
                {renderNews}
            </Slider>
            <button className='dklButton' onClick={()=>{navigate('/news')}}>Все публикации</button>
        </div>
    </div>
  )
}

export default News