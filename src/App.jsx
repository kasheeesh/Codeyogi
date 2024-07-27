import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductListPage from './ProductListPage';
import ProductDetail from './ProductDetail';
import Notfound from './Notfound';
import Signup from './Signup';
import Login from './Login';
import Footer from './Footer';
import Cart from './Cart';

function App() {
    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart, setCart] = useState(savedData);
    const [totalCount, setTotalCount] = useState(0);

    const handleAddToCart = (productId, count) => {
        const oldCount = cart[productId] || 0;
        const updatedCart = { ...cart, [productId]: oldCount + count };
        setCart(updatedCart);
        localStorage.setItem("my-cart", JSON.stringify(updatedCart));
    };

    const handleUpdateCart = (updatedCart) => {
        const filteredCart = Object.fromEntries(
            Object.entries(updatedCart).filter(([key, value]) => value > 0)
        );
        setCart(filteredCart);
        localStorage.setItem("my-cart", JSON.stringify(filteredCart));
    };

    useEffect(() => {
        const count = Object.keys(cart).reduce((acc, curr) => acc + cart[curr], 0);
        setTotalCount(count);
    }, [cart]);

    return (
        <div className="bg-gray-300">
            <Navbar productCount={totalCount} />
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/products/:id/" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                <Route path="*" element={<Notfound />} />
                <Route path="/cart" element={<Cart cart={cart} onUpdateCart={handleUpdateCart} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
