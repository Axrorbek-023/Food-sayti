import React from 'react'
import './Payment.scss'
import card from '../../assets/img/Card.png'
import paypal from '../../assets/img/Paypal.png'
import wallet from '../../assets/img/Wallet.png'

function Payment({open, setOpen}) {
  return (
    <div style={!open ? {right:'0%'} : {right:'-35%'}} className='payment'>
        <h1 className='payment__title'>Payment</h1>
        <p className='payment__p'>3 payment method available</p>
        <h1 className='payment__title two'>Payment</h1>

        <div className='pay__cards'>
          <div className='pay__card'>
            <img className='card__img' src={card} alt="" />
            <p className='card__info'>Credit Card</p>
          </div>

          <div className='pay__card'>
            <img className='card__img' src={paypal} alt="" />
            <p className='card__info'>Paypal</p>
          </div>

          <div className='pay__card'>
            <img className='card__img' src={wallet} alt="" />
            <p className='card__info'>Cash</p>
          </div>
        </div>

        <div className='lab__in__box'>
          <label className='lab'>Cardholder Name</label>
          <input className='box__inp' type="text" />

          <label className='lab'>Card Number</label>
          <input className='box__inp' type="text"/>
          
          <div className='box__div'>
            <div>
              <label className='lab lab2'>Expiration Date</label>
              <input className='div__inp' type="text"/>
            </div>

            <div>
              <label>CVV</label>
              <input className='div__inp' type="password"/>
            </div>
          </div>


          <div className='box__div'>
            <div>
              <label className='lab'>Order Type</label>
              <select className='div__inp'>
                <option value="" selected>Dine In</option>
                <option value="" selected>To Go</option>
                <option value="" selected>Delivery</option>
              </select>
            </div>

            <div>
              <label className='lab'>Table no.</label>
              <input className='div__inp' type="text"/>
            </div>
          </div>
        </div>
        <button className='cancel' onClick={()=> setOpen(true)}>Cancel</button>
        <button className='confirm'>
          <p>Confirm Payment</p>
        </button>

    </div>
  )
}

export default Payment