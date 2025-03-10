import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import LoginSignup from './components/Pages/LoginSignup';
import Cart from './components/Pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kid_banner from '../src/assets/banner_kids.png'


const App = () => {
  return (
    <div>
      <BrowserRouter basename="/ecommerceweb" >
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product/>} >
             <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
