import React from 'react'
import './css.css'

const Footer = () => {
  return (
    <>
    <div className='footer ContainerXl'>
        <div>
            <div>
                <h2>Навигация</h2>
                <ul>
                    <li>Главная</li>
                    <li>Грузоперевозки</li>
                    <li>Карьера</li>
                    <li>Новости</li>
                    <li>Свяжитесь с нами</li>                    
                </ul>
            </div>
            <div>
                <h2>Грузоперевозки</h2>
                <ul>
                    <li>Ipsum pariatur deserunt id ex commodo.</li>
                    <li>Laborum duis ullamco elit ea tempor velit cupidatat </li>
                    <li>Lorem ut elit aliqua reprehenderit.</li>
                </ul>
            </div>
            <div>
                <h2>Свяжитесь с нами</h2>
                <ul>
                    <li>+993 64 12 12 12</li>
                    <li>+993 61 52 42 22</li>
                </ul>
                <h2>Электронная почта</h2>                
                <ul>
                    <li>info@dkl.company</li>
                </ul>
            </div>
            <div>
                <h2>Адрес</h2>
                <ul>
                    <li>Fugiat occaecat 582 j. Mollit do voluptate excepteur 6. </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='footerBottomLine'>
        <p>© Dana Kerwen HJ - All right reserved.</p>
    </div>
    </>
  )
}

export default Footer