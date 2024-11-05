import React, { createContext, useEffect, useState } from "react";
import all_product from "../components/Assets/all_product";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartIteams] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartIteams((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const RemoveCart = (itemId) => {
    setCartIteams((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmont = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };


  const getTotalcartItems = ()=>{
    let totalItem = 0;

    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item]
      }
    }
    return totalItem
  }

  const contextValue = {
    getTotalcartItems,
    getTotalCartAmont,
    all_product,
    cartItems,
    addToCart,
    RemoveCart,
  };
  console.log(cartItems);

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopContextProvider;
