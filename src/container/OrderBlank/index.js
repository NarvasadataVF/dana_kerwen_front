import React from 'react'
import './css.css'

const OrderBlank = () => {
  return (
    <div className='orderBlank ContainerXl'>
        <div>
            <div className='orderText'>
                <h1>Закажите <span>перевозку</span> груза</h1>
                <p>Dolor magna proident reprehender elit mollit in commodo pariatur ut do excepteur laborum irure pariatur anim consequat.it et fugiat ad enim exercitation.</p>
            </div>
            <div>
                <div>
                    <input placeholder='Компания' type="text"/>
                </div>
                <div>
                    <input placeholder='Имя' type="text"/>
                </div>
                <div>
                    <input placeholder='E-mail' type="text"/>
                </div>
                <div>
                    <input placeholder='Телефон' type="text"/>
                </div>
                <div>
                    <select>
                        <option disabled selected>Условия оплаты</option>
                        <option>Mollit nostrud ullamco enim eiusmod</option>
                        <option>Incididunt ullamco nulla</option>
                    </select>
                </div>
                <button className='dklButton'>Заказать</button>
            </div>
        </div>
    </div>
  )
}

export default OrderBlank