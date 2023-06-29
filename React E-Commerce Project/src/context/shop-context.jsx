import { createContext , useState} from 'react';
import React from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null); //createContext creates Store in application keep track of state,functions 
//So, we can access those everywhere in project

//store object as itemId(as key) and itemCOunt(value initially=0),pass this object to initialize state
/*
{   1:0,
    2:1,VALUE WILL INCREaSED BY 1 everytime WHEN BUTTON ADDTOCART clicked
    3:0
}
we can add above object directly in useState(),instead we use function getDefaultCart()
better to use function so that whenever we add new products in products.js file it easy to add all products to object
*/

const getDefaultCart=()=>{
    let cart = {};//empty object created
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;// add key as 1 and value as 0
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]= useState(getDefaultCart());

    //calculate total amount to pay 
    const getTotalCartAmount = ()=>{
        let totalAmount=0;
        for (const item in cartItems){
            if (cartItems[item] > 0){   //check items value > 0 means the items in the cart
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));//find that product from array by id to fetch its Price
            totalAmount += cartItems[item] * itemInfo.price ;
            }
        }
        return totalAmount;
    };

    //addToCart()
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}));
    };

    //removefromCart()
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}));
    };

    //change itemCount manually
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

   
 const contextValue = 
            { cartItems, 
             addToCart, 
             removeFromCart, 
             updateCartItemCount, 
             getTotalCartAmount,
            };   // wrap all states,function in single variable
        
 //console.log(cartItems);
 return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> //passing states,functions to inside this so that it can be accessed by outside this component
  )
}
