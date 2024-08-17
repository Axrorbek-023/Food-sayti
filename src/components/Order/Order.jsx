import React, { useState } from 'react'
import './Order.scss'

function Order({render, setRender, open, setOpen}) {
  const [place, setPlace] = useState('dinein')
  let locData = JSON.parse(window.localStorage.getItem('localfood'))
  const [del, setDel] = useState(true)
  function delData (id){
    window.localStorage.setItem('localfood', JSON.stringify(locData.filter((item)=> item.id != id)))
    setDel(!del)
  }
  
  return (
    <div className='order' style={!open ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0%)'}}>
        <h2>Orders #34562</h2>
        <span className='order__span'>
          <button className={place == 'dinein' ? 'active' : null} onClick={()=> setPlace('dinein')}>Dine In</button>
          <button className={place == 'togo' ? 'active' : null} onClick={()=> setPlace('togo')}>To Go</button>
          <button className={place == 'delivery' ? 'active' : null} onClick={()=> setPlace('delivery')}>Delivery</button>
        </span>
        <div className="order__info">
          <p>Item</p>
          <span>
            <p>Qty</p>
            <p>Price</p>
          </span>
        </div>
        <ul className="order__list">
          {
            locData && locData.filter((k)=> k.place == place).map((item)=>(
              <li className="order__item">
                <div className="item__top">
                  <img src={item.img} alt="" />
                  <span>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </span>
                  <p className='item__count'>{item.count}</p>
                  <p className="all__price">{item.price * item.count}</p>
                </div>
                <div className="item__bot">
                  <input type="text" placeholder='Please, just a little bit spicy only.'/>
                  <button onClick={()=> delData(item.id)}><i class="bi bi-trash3"></i></button>
                </div>
              </li>
            ))
          }
        </ul>
        <button className='to__payment' onClick={()=> setOpen(!open)}
         style={!open ? {display:'none'} : {display:'block'}}>Continue to Payment</button>
    </div>
  )
}

export default Order