import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

function Navbar({ productCount }) {
    return (
        <div className="bg-white flex justify-between">
            <img className="w-24 py-2 ml-32" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt="Logo" />
            <div className='mr-12'>
                <span className='text-xs'>{productCount}</span>
                <Link to="/cart"><FaCartShopping /></Link>
            </div>
        </div>
    );
}

export default Navbar;
