import React from 'react';
import { categories } from '../../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
   <div>
   <div className='sale-container'>
   <span> Online Shopping Sale ! Check out our special discounts on our products. </span>
    </div>
    <div className="ctg-Container">
    {categories.map(item=>(
      <CategoryItem item={item} key={item.id}/>
    ))}
    </div>
   </div>

  )
}

export default Categories
