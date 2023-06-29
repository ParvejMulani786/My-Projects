import {React ,useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const { addToCart, cartItems } = useContext(ShopContext); //use "useContext" function to fetch state,functions from context api
  
    const cartItemAmount = cartItems[id]; //value of perticular product id is fetched 
    return (
    <div className="product">
        <img src={ productImage } alt="product imge" />
        <div className="description">
            <p>
                <b>{ productName }</b>
            </p>
            <p>
                ${ price }
            </p>
        </div>
        <button className="addToCartBttn" onClick={()=> addToCart(id)}>
             Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }</button>
    </div>
  )
}
