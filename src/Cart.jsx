import react from 'react';
import CartProductList from './CartProductList';


function Cart(){
    return(
        <>
        <CartProductList />
         <div className="mr-32 mt-12 flex justify-between bg-gray-100 mx-auto w-5/12 h-12 border">
         <p className = " text-lg font-bold my-auto ml-12">Cart Totals</p>
        </div>
        <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-12 border">
         <p className = " text-lg font-bold my-auto ml-12">Subtotal</p>
         <p className = " text-lg font-semibold my-auto mr-48">$199</p>
        
        </div>
        <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-12 border">
         <p className = " text-lg font-bold my-auto ml-12">Total</p>
         <p className = " text-lg font-semibold my-auto mr-48">$199</p>
        
        </div>
         <div className="mr-32 flex justify-between bg-white mx-auto w-5/12 h-20 border">
         <button className="font-bold bg-red-500 text-white  py-4 w-10/12 m-auto rounded-md">PROCEED TO CHECKOUT</button>
        
        </div>



        </>
    )

}

export default Cart;
