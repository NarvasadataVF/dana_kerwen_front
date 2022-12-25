import React from 'react'
import { MailIcon, PhoneIcon, TelegramIcon } from '../../assets/img/svg/icons'
import './css.css'

const ContactsDetails = () => {
  return (
    <div className='contactsDetails'>
        <h2>Наши контакты</h2>
        <ul>
            <li><PhoneIcon /> +993 63342424</li>
            <li><TelegramIcon /> +993 34234456</li>
            <li><TelegramIcon /> +993 63342424</li>
            <li><MailIcon /> info@dkl.company</li>
        </ul>
    </div>
  )
}

export default ContactsDetails