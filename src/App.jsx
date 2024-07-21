 import React,{useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Product from './Product';
import {useParams} from 'react-router-dom';
import Search from './Search';
import Cart from './Cart';
import Navbar from './Navbar';
import Notfound from './Notfound';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';
import ProductList from './ProductList';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
function App() {

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString)
  const[cart, setCart] = useState(savedData);

  const handleAddtoCart = (productId, count) => {
    const oldCount = cart[productId] || 0;
    const car = { ...cart, [productId]: oldCount + count };
    setCart(car);
    const cartstring = JSON.stringify(car);
    localStorage.setItem("my-cart",cartstring);
  };

  const totalCount = Object.keys(cart).reduce((acc, curr) => acc + cart[curr], 0);
  
  return (
    <>
    <div className = "bg-gray-300">
    <Navbar productCount = {totalCount}/>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:id/" element={<ProductDetail onAddtoCart = {handleAddtoCart}/>} />
        <Route path="*" element={<Notfound />} />
        <Route path ="/cart" element = {<Cart cart ={cart}/>} />
        <Route path = "/login" element = {<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    <Footer/>
    </div>
      </>
    
  );
}

export default App;