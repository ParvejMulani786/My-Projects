import React from 'react' //type refc
import { PRODUCTS } from '../../products';
import { Product }from './product';
import './shop.css';

export const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>MulaniTech Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((p)=>(   //iterate over array of products present in products.js
            <Product data={p} />        //send each object of products.js to Product componenet
        ))}

        </div>
    </div>
  )
}
