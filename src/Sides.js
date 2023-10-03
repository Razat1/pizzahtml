import React, {useState} from "react";
import "./Sides.css"

const sidesData = [
    {id: 1, name: "Salad", basePrice: 5.99, image: "/images/salad.png"},
    {id: 2, name: "Garlic Bread", basePrice: 3.99, image: "/images/garlicBread.png"},
    {id: 3, name: "Cheesy Garlic Bread", basePrice: 4.99, image: "/images/cheeseyGarlic.png"},
    {id: 4, name: "Coleslaw", basePrice: 1.99, image: "/images/coleslaw.png"},
    {id: 5, name: "Chicken Wings", basePrice: 4.99, image: "/images/chickenWings.png"}
];

function Sides({ addToCart, removeFromCart }) {
    return (
        <div>
            <h1>Sides</h1>
            <div className="sides-list">
                {sidesData.map((sides) => (
                    <div key={sides.id} className="sides-item">
                        <h2>{sides.name}</h2>
                        <img
                            src={sides.image}
                            alt={sides.name} // Use an appropriate alt text
                            className="sides-image"
                        />
                        <p>Price: £{sides.basePrice.toFixed(2)}</p>
                        <button onClick={() => addToCart(sides)} className={"cartload"}>Add to Cart</button>
                        <button onClick={() => removeFromCart(sides)} className={"remove-cart"}>Remove from Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sides;