import React, {useState} from "react";
import Cart from "./cart";
import "./Beverages.css"

const BevData = [
    {id: 1, name: "Pepsi", basePrice: 5.99, image: "/images/pepsi.png"},
    {id: 2, name: "Pepsi Max", basePrice: 3.99, image: "/images/pepsiMax.png"},
    {id: 3, name: "Dr Pepper", basePrice: 4.99, image: "/images/dr-Pepper.png"},
    {id: 4, name: "7-Up", basePrice: 3.99, image: "/images/7up.png"},
    {id: 5, name: "Tango", basePrice: 4.99, image: "/images/tango.png"}
];

function Beverages({ addToCart, removeFromCart }) {
    return (
        <div>
            <h1>Beverages (Litre Bottles Only!)</h1>
            <div className="bevs-list">
                {BevData.map((bevs) => (
                    <div key={bevs.id} className="bevs-item">
                        <h2>{bevs.name}</h2>
                        <img
                            src={bevs.image}
                            alt={bevs.name}
                            className="bevs-image"
                        />
                        <p>Price: £{bevs.basePrice.toFixed(2)}</p>
                        <button onClick={() => addToCart(bevs)} className={"cartload"}>Add to Cart</button>
                        <button onClick={() => removeFromCart(bevs)} className={"remove-cart"}>Remove from Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Beverages;