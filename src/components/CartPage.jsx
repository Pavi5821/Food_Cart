import React, { useEffect, useState } from 'react'
import "./CartPage.css";
export const CartPage = ({cart,setCart}) => {
    const [total,setTotal]=useState(0);
    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amnt),0))
    },[cart]);
  return (
    <> 
    <h1 className='cart-heading'>Cart Products</h1>
       <div className='cart-container'>
        {
            cart.map((product)=>(
                <div className="cart-product" key={product.id}>
            <div className="img">
                <img src={product.pic} alt='image' />
            </div>
            <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amnt}</p>
            </div>
        </div>
            ))
        }
    </div>
    <h2 className='cart-amnt'>Total Amount Rs: <span>{total}</span></h2>
    </>

  )
}
