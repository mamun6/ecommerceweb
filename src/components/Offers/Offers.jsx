import React from 'react'
import './Offers.css'
import execlusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers' >
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers Product</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={execlusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
