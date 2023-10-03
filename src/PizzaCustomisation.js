import React, { useState } from "react";
import "./PizzaCustomisation.css";

export const crustOptions = [
    "Thin Italian",
    "Stone Crust",
    "Cheese Stuffed Crust",
    "Vegan"
];

const sizeOptions = ["Small (8\")", "Medium (12\")", "Large (16\")", "Pizzanormous (20\")"];

function PizzaCustomisation({ pizza, addToCart, removeFromCart }) {
    const [selectedCrust, setSelectedCrust] = useState("Thin Italian");
    const [selectedSize, setSelectedSize] = useState("Small (8\")");

    const handleCrustChange = (crust) => {
        setSelectedCrust(crust);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const calculatePrice = (crust, size) => {
        const basePrice = pizza.basePrice;
        let crustPrice = 0;
        let sizeMultiplier = 1;
        console.log(basePrice);
        console.log(sizeMultiplier);
        console.log(crustPrice);

        // Calculate crust price based on the selected crust
        if (crust === "Stone Crust") {
            crustPrice = 3.00;
        } else if (crust === "Cheese Stuffed Crust") {
            crustPrice = 4.00;
        } else if (crust === "Vegan") {
            crustPrice = 2.50;
        }

        // Calculate price multiplier based on the selected size
        if (size === "Medium (12\")") {
            sizeMultiplier = 1.2;
        } else if (size === "Large (16\")") {
            sizeMultiplier = 1.3;
        } else if (size === "Pizzanormous (20\")") {
            sizeMultiplier = 1.5;
        }

        // Calculate the total price of the pizza
        let totalPrice = (basePrice + crustPrice) * sizeMultiplier;
        totalPrice = totalPrice.toFixed(2);
        return totalPrice;
    };

    return (
        <div className="pizza-customisation">
            <h2>Customize Your Pizza</h2>
            <div className="pizza-options">
                <label>
                    Select Crust:
                    <select
                        value={selectedCrust}
                        onChange={(e) => handleCrustChange(e.target.value)}
                    >
                        {crustOptions.map((crust) => (
                            <option key={crust} value={crust}>
                                {crust}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Select Size:
                    <select
                        value={selectedSize}
                        onChange={(e) => handleSizeChange(e.target.value)}
                    >
                        {sizeOptions.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </label>
                <p className={"price"}> £{calculatePrice(selectedCrust, selectedSize)}</p>
                <button className={"cartload"} onClick={() => addToCart(pizza, selectedSize, selectedCrust)}>
                    Add to Cart
                </button>
                <button onClick={() => removeFromCart(pizza)} className={"remove-cart"}>
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default PizzaCustomisation;
