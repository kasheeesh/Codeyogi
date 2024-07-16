import React, {useState} from 'react';
import { useEffect } from 'react';
import Product from './Product';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';
import getProductList from './Productfetch';
import ProductList from './ProductList';
function ProductListPage() {



  
  const[data, setData] = useState([]);

  useEffect(() => {
    getProductList().then((listData) => {
      let p = listData.data.products;
      setData(p);
      console.log(p[0]);
    });
  }, []);
  const [query, changeQuery] = useState("");
  const[sort , setSort ] = useState("default");
  
  console.log(data);
  
  function handler(event){
    let newq = event.target.value;
    let newdata = data.filter(function(item){
      return item.title.toLowerCase().includes(newq.toLowerCase());
    })
    


    changeQuery(newq);
    setData(newdata);
  }
  
  
  function sortChange(event){
    setSort(event.target.value);    
  }
  if (sort === "htol") {
    data.sort(function (a, b) {
      return b.price - a.price
    });
  } else if (sort === "ltoh") {
    data.sort(function (a, b) {
      return a.price - b.price
    });
  } else if (sort === "name") {
    data.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }

  return (
    <>
    <div className = "bg-gray-300">
    <div className = "mt-10 bg-white w-9/12 m-auto mb-10">
      <input value = {query}
        placeholder = "Search" className = "border border-gray-200 rounded-md w-96 p-2" onChange={handler}
        />
      <div className = "w-32 ml-auto mr-14 ">
        <select onChange = {sortChange} className = "border border-black ml-auto w-32 mt-14 " value = {sort}>
          <option value = "default">Default Sorting</option>
          <option value = "htol">Price - High to Low</option>
          <option value = "ltoh">Price - Low to  High</option>
          <option value = "name">Sort by Title</option>
          <option>Customer Rating</option>
        </select>
      </div>
    <ProductList products = {data} />
    </div>
    </div>

    </>
  );
}

export default ProductListPage;