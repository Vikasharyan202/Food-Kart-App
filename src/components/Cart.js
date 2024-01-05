import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilits/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="cart">
            <h1>My Cart</h1>
            <div className="cartItems">
                <ItemList items={cartItems}/>
            </div>
            <button onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && (<h1>Your cart is empty! Go for shopping and filled your cart....</h1>)}
        </div>
    )
}

export default Cart;