// /* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './css.css'
import {MenuLine1,  
        Closelineleft, 
        Closelineright, 
        MenuLine2, 
        MenuLine3,} from '../../assets/img/svg/icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from './../../assets/img/logo.png'


const Navbar = () => {
  const {pathname} = useLocation()
  const [opened, setOpened] = useState(false)
//   const langRef = useRef()
  const navRef = useRef()
  const logoRef = useRef()
  const logoNameRef = useRef()
  const menuRef = useRef()
  const closeRef = useRef()
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

//   const openLang = () => {
//     const lang = langRef.current
//     lang.classList.toggle('langActive')
//   }

    // useEffect(()=>{
    //     window.addEventListener('scroll', ()=>{
    //         if(window.scrollY >= 80){
    //             logoRef.current.classList.add("activeLogo")
    //             logoNameRef.current.classList.add('activeLogoSize')
    //             setIsActive(true)
    //         }else{
    //             logoRef.current.classList.remove("activeLogo")
    //             logoNameRef.current.classList.remove('activeLogoSize')
    //             setIsActive(false)
    //         }
    //     })
    // }, [])
 
    useEffect(()=>{
        let j = null
        const nav = navRef.current
        const logo = logoRef.current
        const logoName = logoNameRef.current
        const menu = menuRef.current
        const close = closeRef.current
        menu.classList.remove('opacityNone')
        menu.classList.remove('animatedMenu')
        menu.classList.remove('menuNameClass')
        close.classList.remove('opacityBlock')
        nav.classList.remove("activeNavbar")
        setOpened(false)
        if(opened){
            nav.style.borderBottom = "none"
        }else{
            nav.style.borderBottom = "none"
        }
        isActive ? j = null : logo.classList.remove("activeLogo")
        isActive ? j = null : logoName.classList.remove('activeLogoSize')
    }, [pathname])


  const openNav = () => { 
    let j = null
    const nav = navRef.current
    const logo = logoRef.current
    const logoName = logoNameRef.current
    const menu = menuRef.current
    const close = closeRef.current
    menu.classList.toggle('opacityNone')
    menu.classList.toggle('animatedMenu')
    menu.classList.toggle('menuNameClass')
    close.classList.toggle('opacityBlock')
    nav.classList.toggle("activeNavbar")
    setOpened(!opened)
    if(opened){
        nav.style.borderBottom = "none"
    }else{
        nav.style.borderBottom = `1px solid #fff`
    }
    isActive ?  j = null : logo.classList.toggle("activeLogo")
    isActive ?  j = null : logoName.classList.toggle('activeLogoSize')

  }

  return (
    <div className='navbarContainer'>
        <div >
            <div className='navbar' >        
                <div className="navbarLogo">
                    <div ref={logoNameRef} onClick={()=>{navigate('/')}} >  
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div ref={logoRef}  onClick={()=>{navigate('/')}}>
                        {/*LOGO */}                        
                    </div>
                </div>
                <div className='navbarControl'>
                    <div className='navbarMenu' onClick={openNav}>
                        <div ref={menuRef} className="animatedMenu">
                            <MenuLine1/>
                            <MenuLine2/>
                            <MenuLine3/>
                            <div className='navCloseIcon' ref={closeRef}>
                                <Closelineleft/>
                                <Closelineright />
                            </div>                          
                        </div>
                    </div>
                    <div className='langNtheme pcOnly'>
                        {/* <div className='navbarLocale' onClick={openLang}>
                             <div>
                                <div>
                                    <span>Ru</span>
                                    <Localeicon />
                                </div>
                                <ul ref={langRef} >
                                <li>Ru</li>
                                <li>Tm</li>                                        
                                <li>En</li>                                        
                            </ul>
                            </div> 
                            
                        </div>               */}
                        <div>                            
                        </div>
                    </div>
                </div>            
            </div>
            <div className='openedNavbar' ref={navRef} >
                <div className='openedNavbarText'>
                    <div className='langNtheme langNthemeSpecial portableOnly'>
                        {/* <div className='navbarLocale'>
                            <div>
                                <div>
                                    <span>Ru</span>
                                    <Localeicon />
                                </div> 
                                <select ref={langRef} >
                                    <option>Ru</option>
                                    <option>Tm</option>                                        
                                    <option>En</option>                                        
                                </select>
                            </div>
                            
                        </div>               */}
                        <div>     
                            {/* TEXT */}
                        </div>
                    </div>
                    <div>
                        {/* <Link to="/Brief"><span >Поговорим о вашем проекте</span></Link> */}
                    </div>                    
                </div>
                <div>
                    <ul>
                        <li><Link to="/about">О Компании</Link></li>
                        <li><Link to="/Services/logistics">Услуги грузоперевозок</Link></li>
                        <li><Link to="/Career">Карьера</Link></li>                        
                        <li><Link to="/News">Новости</Link></li>                        
                        <li><Link to="/Contacts">Контакты</Link></li>                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar