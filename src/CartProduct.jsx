import react from "react";
function CartProduct({src, title, price, quantity, subtotal}){
    return (
        <>
        <div className=" flex justify-between bg-white mx-auto w-10/12 h-24 border">
            <img className = "ml-16 my-auto h-5/6 w-18 "src = {src}/>
            <p className="text-red-500 my-auto text-black font-bold">{title}</p>
            <p className="my-auto text-black font-semibold">{price}</p>
            <input className="my-auto border h-8 w-10" value = {quantity} type="number"></input>
            <p className="my-auto mr-16 text-black font-semibold">{subtotal}</p>

        </div>

        </>
    )
}
export default CartProduct;

