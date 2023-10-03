import React, { useState } from "react";
import OrderForm from "./orderForm";
import {cartContext} from "./cartContext";

function Cart({ cartItems, removeFromCart }) {
    const [isOrderFormVisible, setOrderFormVisible] = useState(false);

    const showOrderForm = () => {
        const hasItemsInCart = cartItems.some((item) => item.quantity > 0);

            if (hasItemsInCart) {
                setOrderFormVisible(true);
            } else {
                setOrderFormVisible(false);
                alert("Please add items to your cart before checking out!")
            }
        };

    const updatedCartItems = cartItems.filter((item) => item.quantity > 0);

    const totalCost =
        updatedCartItems.length > 0
            ? updatedCartItems.reduce(
                (total, item) => total + item.basePrice * item.quantity,
                0
            )
            : 0;



    return (
        <div className="cart">
            <h2>Your cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} (Quantity: {item.quantity})
                        <button onClick={() => removeFromCart(item)}>Remove Item</button>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={showOrderForm}>Checkout</button>
                {isOrderFormVisible && <OrderForm />}

                <div className="total">Total: £{totalCost.toFixed(2)}</div>
            </div>
        </div>
    );
}

export default Cart;
