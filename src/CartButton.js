// CartButton.js
import React from "react";

function CartButton({ cartItems }) {
    // Calculate the total number of items in the cart
    const totalItems = cartItems.length;

    return (
        <div className="cart-button">
            <button>Cart ({totalItems})</button>
        </div>
    );
}

export default CartButton;
