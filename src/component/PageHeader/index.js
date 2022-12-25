import React from 'react'
import './css.css'

const PageHeader = ({content}) => {
  return (
    <div className='ContainerXl PageHeader'>
        <div>
            <h1>{content}</h1>
        </div>
    </div>
  )
}

export default PageHeader