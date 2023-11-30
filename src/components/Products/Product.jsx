import React from 'react';
import './Products.css';
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart } from "react-icons/fa";


const Product = ({item}) => {
  return (
    <div className='productContainer'>
      <img src={item.img}/>
      <div className="product-info">
        <div className='icon'>
        <LuShoppingCart />
        </div>
        <div className='icon'>
        <CiSearch />
        </div>
        <div className='icon'>
        <FaRegHeart />
        </div>

      </div>
    </div>
  )
}

export default Product
