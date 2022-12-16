import React from 'react'
import NewsComponent from '../../component/NewsComponent'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './css.css'
import { useNavigate } from 'react-router-dom';

const News = () => {

    const navigate = useNavigate()

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

  return (
    <div className='ContainerXl news'>
        <div>
            <h1>Новости и события</h1>
            <Slider {...settings}>
                <NewsComponent date="24 jan 2022" text="Anim fugiat et veniam exercitation ea ullamco adipisicing elit ea pariatur anim excepteur pariatur non."/>
                <NewsComponent date="24 jan 2022" text="Do fugiat sunt consequat mollit fugiat cupidatat cillum adipisicing exercitation non magna."/>
                <NewsComponent date="24 jan 2022" text="Sunt ut sit nisi amet ad excepteur ipsum adipisicing minim nulla laborum."/>
                <NewsComponent date="24 jan 2022" text="Adipisicing nisi ipsum voluptate id."/>
                <NewsComponent date="24 jan 2022" text="Mollit veniam sit ipsum occaecat nisi ullamco et anim est proident adipisicing ullamco quis."/>
                <NewsComponent date="24 jan 2022" text="Esse culpa laboris labore deserunt."/>
                <NewsComponent date="24 jan 2022" text="Anim dolore amet consectetur sunt ad."/>
                <NewsComponent date="24 jan 2022" text="Duis esse do mollit consectetur nisi anim cillum nulla pariatur ea do non in."/>
            </Slider>
            <button className='dklButton' onClick={()=>{navigate('/news')}}>Все публикации</button>
        </div>
    </div>
  )
}

export default News