import React from 'react';
import Product from './Product';
function ProductList({products}){
  return(
  <div className = "flex flex-wrap lg:gap-6 gap-4 pt-10 pb-24 px-14">
    {products.map(function(item){
    return(
      <Product  key={item.id}
        id = {item.id}
        category = {item.category} 
        price = {item.price}
        title = {item.title}
        src = {item.thumbnail}
        />
        );
    })}
  </div>
    );
  
}
export default ProductList;