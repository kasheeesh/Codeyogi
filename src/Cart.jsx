import React, { useState, useEffect } from 'react';
import CartProductList from './CartProductList';
import getProductList from './Productfetch';

function Cart({ cart }) {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getProductList().then((listData) => {
            let p = listData.data.products;
            setData(p);
        });
    }, []);

    useEffect(() => {
        if (data.length > 0 && Object.keys(cart).length > 0) {
            let totalValue = 0;
            for (let id in cart) {
                if (cart.hasOwnProperty(id)) {
                    const product = data.find(p => p.id === parseInt(id));
                    if (product) {
                        totalValue += product.price * cart[id];
                    }
                }
            }
            setTotal(totalValue);
        }
    }, [data, cart]);

    return (
        <>
            {console.log(cart, data)}

            <CartProductList cart={cart} productList={data} />

            <div className="mr-32 mt-12 flex justify-between bg-gray-100 mx-auto w-5/12 h-12 border">
                <p className="text-lg font-bold my-auto ml-12">Cart Totals</p>
            </div>
            <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-12 border">
                <p className="text-lg font-bold my-auto ml-12">Subtotal</p>
                <p className="text-lg font-semibold my-auto mr-48">${total.toFixed(2)}</p>
            </div>
            <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-12 border">
                <p className="text-lg font-bold my-auto ml-12">Total</p>
                <p className="text-lg font-semibold my-auto mr-48">${total.toFixed(2)}</p>
            </div>
            <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-20 border">
                <button className="font-bold bg-red-500 text-white py-4 w-10/12 m-auto rounded-md">PROCEED TO CHECKOUT</button>
            </div>
        </>
    );
}

export default Cart;
