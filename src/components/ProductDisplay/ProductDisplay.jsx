import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart} = useContext(ShopContext)

    return (
        <div className='productdisplay' >
            <div className="productdisplay-left">
                <div className="produuctdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img'
                     src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1> {product.name} </h1>
             <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
                <div>
                 <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new"> ${product.new_price} </div>
                 </div>
                 <div className="productdisplay-right-description">
                 Elevate your everyday look with this timeless Classic Cotton T-Shirt. 
                 Crafted from soft, breathable fabric, this shirt offers all-day comfort 
                 while keeping you looking effortlessly stylish. Featuring a clean,
                  versatile design, it pairs easily with jeans, shorts, or joggers for a 
                  casual yet polished appearance. Available in a variety of colors, sizes,
                   and fits, it’s the perfect wardrobe essential for any occasion.
                 </div>
                 <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                 </div>
                 <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                 <p className='productdisplay-right-category'>
                <span>Category: </span> Women, T-shirt, Crop Top </p>
                <p className='productdisplay-right-category'>
                <span>Tags: </span> Modern, Latest </p>
                </div>
             </div>
            </div>
        </div>
    )
}

export default ProductDisplay
