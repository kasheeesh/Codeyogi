import React from 'react';

function CartProduct({ src, title, price, quantity, onQuantityChange }) {
    const handleQuant = (event) => {
        const newQuantity = event.target.value;
        onQuantityChange(newQuantity); // Notify the parent component of the change
    };

    const subtotal = price * quantity; // Calculate subtotal

    return (
        <div className="flex justify-between bg-white mx-auto w-10/12 h-24 border">
            <img className="ml-16 my-auto h-5/6 w-18" src={src} alt={title} />
            <p className="text-red-500 my-auto text-black font-bold">{title}</p>
            <p className="my-auto text-black font-semibold">{`$${price.toFixed(2)}`}</p>
            <input
                onChange={handleQuant}
                className="my-auto border h-8 w-10"
                value={quantity}
                type="number"
            />
            <p className="my-auto mr-16 text-black font-semibold">{`$${subtotal.toFixed(2)}`}</p>
        </div>
    );
}

export default CartProduct;
