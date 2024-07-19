import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
function Navbar({ productCount }){
  return (
    <div className = "bg-white flex justify-between">
    <img className = "w-24 py-2 ml-32"src = "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"/>
    <div className='mr-12'>
      <span className='text-xs'>{productCount}</span>
      <FaCartShopping/>
  
    </div>
    </div>
  );
}
export default Navbar;