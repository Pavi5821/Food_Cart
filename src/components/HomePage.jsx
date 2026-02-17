import React, { useState } from 'react';
import data from '../assets/products.json';
import { Product } from './Product';
import "./HomePage.css";

export const HomePage = ({cart,setCart}) => {
    const[products]=useState(data);
  return (
    <div className='product-container'>
        {
            products.map((product)=>(
                <Product key={product.id} product={product} cart={cart} setCart={setCart} />
            ))
        }
    </div>
  )
}
