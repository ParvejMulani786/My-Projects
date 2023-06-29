import {React, useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';

export const Cart=()=>{
const {cartItems, getTotalCartAmount}=useContext(ShopContext); //fetch state from context api
const totalAmount = getTotalCartAmount();
const navigate = useNavigate();

    return(
        <div className='cart'>
            <div>
                <h1> Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((p)=>{
                    if(cartItems[p.id] !== 0){
                        return < CartItem data={p} />
                    }
                })}
            </div>

        {totalAmount > 0 ?
            <div className="checkout">
                <p> Subtotal : <b> $ {totalAmount} </b> </p>
                <button onClick={()=> navigate("/") }> Continue Shopping </button>
                <button> Checkout </button>
            </div>
        : <h2>Your Shopping Cart is Empty</h2>
        }
        </div>
    )
}
