import React from 'react';
import { Link } from 'react-router-dom';
function Product(data){
  console.log(data);
  return (
    <div className="xl:w-80 w-64 lg:w-56 xl:mt-12 mt-2 h-82 xl:mb-2 mb-2" >
      <div className="h-4/6 w-full">
        <img src = {data.src} alt={data.category} className="object-cover w-full h-full"/>
      </div>
        <h2 class="text-gray-500">{data.category}</h2>
        <p >{data.title}</p>
        <img className="w-16" src = "https://cdn.vectorstock.com/i/500p/75/52/five-star-rating-glossy-yellow-gold-5-stars-vector-48127552.jpg"/>
        <p>{data.price}</p>
        <Link to= {"/products/" + data.id }>View Detail</Link>

    </div>
  );
}

export default Product;
