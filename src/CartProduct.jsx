import react from "react";
function CartProduct(){
    return (
        <>
        <div className=" flex justify-between bg-white mx-auto w-10/12 h-24 border">
            <img className = "ml-16 my-auto h-5/6 w-18 "src = "https://market99.com/cdn/shop/files/hello-coffee-mug-with-lid-pink-cat-420-ml-mugs-1-29122068381866.jpg?v=1697015765"/>
            <p className="text-red-500 my-auto text-black font-bold">Printed Coffee Mug</p>
            <p className="my-auto text-black font-semibold">$15.00</p>
            <input className="my-auto border h-8 w-10" value = "2" type="number"></input>
            <p className="my-auto mr-16 text-black font-semibold">$15.00</p>

        </div>

        </>
    )
}
export default CartProduct;

