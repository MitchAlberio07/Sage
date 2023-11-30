import React from 'react';
import {popularProducts} from "../../data";
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
      <button><Link to='/shop' className='shopLink'>SHOP NOW</Link></button>
    </div>
  )
}

export default Products
