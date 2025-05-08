import React, { createContext, useEffect, useState } from 'react'
import all_product from '../assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems,setcartItems] =useState(getDefaultCart());
    const [totalItem, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (itemId)=>{
        setcartItems((prev)=>{
            const currentCount = prev[itemId] || 0;
            return {
                ...prev,
                [itemId] : currentCount + 1,
            }
        })
    }
    
    const removeFromCart = (itemId) =>{
        setcartItems((prev)=> ({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        let totalCount = 0;
        let totalPrice = 0;

        for (const item in cartItems) {
            if(cartItems[item]>0){
                totalCount += Number(cartItems[item]);

                let productInfo = all_product.find((product)=>product.id === Number(item));
                totalPrice += productInfo.new_price * cartItems[item];
                // console.log("productInfo",productInfo.new_price);
            }
            
        }
        setTotalItems(totalCount);
        setTotalPrice(totalPrice);
    },[cartItems])
    
    const contextValue = {totalPrice,totalItem,all_product,cartItems,addToCart,removeFromCart};
    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;