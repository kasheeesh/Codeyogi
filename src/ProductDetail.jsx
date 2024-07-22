import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetail({ onAddToCart }) {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, [id]);

  function handleCount(event) {
    setCount(+event.target.value);
  }

  function onButtonClick() {
    onAddToCart(id, count); // Ensure this is correct
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-300">
      <div className="w-4/5 h-4/5 p-10 bg-white mt-8 mx-auto">
        <div className="flex">
          <div className="w-1/2 h-auto mx-auto">
            <img src={data.thumbnail} className="w-full h-full object-cover" alt={data.title} />
          </div>
          <div className="p-4 w-1/2">
            <h1 className="text-3xl">{data.title}</h1>
            <p className="mt-8 text-2xl font-semibold">${data.price}</p>
            <p className="mt-4 text-lg">{data.description}</p>
            <input type="number" className="px-2 py-1 border-2 inline w-12 text-black" value={count} onChange={handleCount} />
            <button onClick={onButtonClick} className="font-medium inline-block px-14 py-1 ml-2 bg-red-500 rounded text-white mt-7">ADD TO CART</button>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to={`/products/${+id - 1}`}>Prev</Link>
          <Link to={`/products/${+id + 1}`}>Next</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
