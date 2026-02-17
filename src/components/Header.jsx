import {Link} from "react-router-dom";
import React from 'react'
import "./Header.css";

export const Header = ({cart}) => {
  return (
    <div className="navbar">
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/HomePage"}>Home</Link>
            </li>
            <li>
                <Link to={"/CartPage"}><span className="cart-count">{cart.length}</span> View Cart</Link>
            </li>
        </ul>
    </div>
  )
}
