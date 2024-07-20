import React from 'react';
import CartProduct from './CartProduct';

function CartProductList({ cart, productList }) {
    return (
        <>
            <div className="font-bold mt-20 flex justify-between bg-gray-100 mx-auto w-10/12 h-12 border">
                <p className='my-auto ml-60 xl:ml-80'>Product</p>
                <p className='my-auto ml-44'>Price</p>
                <p className='my-auto ml-20 mr-16'>Quantity</p>
                <p className="my-auto mr-12">Subtotal</p>
            </div>

            {Object.keys(cart).map(id => {
                const product = productList.find(p => p.id === parseInt(id));
                if (product) {
                    const subtotal = product.price * cart[id];
                    return (
                        <CartProduct
                            src={product.thumbnail}
                            title={product.title} 
                            price={product.price}
                            quantity={cart[id]}
                            subtotal={subtotal}
                        />
                    );
                } else {
                    return null;
                }
            })}

            <div className="font-bold flex justify-between bg-gray-100 mx-auto w-10/12 h-12 border">
                <div className="my-auto">
                    <input type="text" className='border h-8 ml-4 p-2 font-light' placeholder='Coupon code' />
                    <button className="bg-red-500 text-white h-8 px-8 ml-4 rounded-md">Apply Coupon</button>
                </div>
                <button className="bg-red-400 mr-4 my-auto text-gray-300 h-8 px-8 ml-4 rounded-md">Update Cart</button>
            </div>
        </>
    );
}

export default CartProductList;
