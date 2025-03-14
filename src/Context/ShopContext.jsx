import React,{createContext, useState} from 'react';
import all_product from '../assets/all_product';

export const  ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
 
    const addToCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
          console.log(updatedCart); // This will show the updated cart
          return updatedCart;
        });
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0, // Prevent negative quantities
        }));
      };

    const contextValue = {all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;

