import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar' >
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>M-teach</p>
            </div>
            <ul className='nav-menu' >
                <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/' > Shop  </Link>  </li>
                <li onClick={()=>{setMenu("mens")}} > <Link style={{textDecoration: 'none'}} to='/mens' > Men  </Link>   </li>
                <li onClick={()=>{setMenu("womens")}} > <Link style={{textDecoration: 'none'}} to='/womens'> Women </Link>   </li>
                <li onClick={()=>{setMenu("kids")}} > <Link style={{textDecoration: 'none'}} to='/kids' > Kids </Link>   </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' >  <button>Login</button> </Link>
                <Link to='/cart' > <img src={cart_icon} alt="" /> </Link>
                <div className="nav-cart-count">0</div>

            </div>



        </div>
    )
}

export default Navbar