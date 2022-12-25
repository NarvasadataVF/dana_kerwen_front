import React from 'react'
import ContactsBlank from '../../component/ContactsBlank'
import ContactsDetails from '../../component/ContactsDetails'
import PageHeader from '../../component/PageHeader'
import './css.css'

const Contacts = () => {
  return (
    <div>
        <PageHeader content="Свяжитесь с нами"/>
        <div className='contacts ContainerXl'>
          <div>
            <ContactsDetails />
            <ContactsBlank />
          </div>
        </div>
    </div>
  )
}

export default Contacts