import React from 'react';
function Navbar({ productCount }){
  return (
    <div className = "bg-white flex justify-between">
    <img className = "w-24 py-2 ml-32"src = "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"/>
      <span>{productCount}</span>
    </div>
  );
}
export default Navbar;