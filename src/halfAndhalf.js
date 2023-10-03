import React, {useState} from "react";
import {crustOptions} from "./PizzaCustomisation"; // Import crust options
import {pizzaData} from "./BrowsePizzas"; // Import pizzaData
import "./HalfAndHalf.css";


function HalfAndHalf({addToCart}) {
    const [base, setBase] = useState("");
    const [selectedHalf1, setSelectedHalf1] = useState(null);
    const [selectedHalf2, setSelectedHalf2] = useState(null);
    const [total, setTotal] = useState(0);



    const combinePizza = () => {
        if (selectedHalf1 && selectedHalf2 && base) {
            const combinedPizza = `${selectedHalf1.name} & ${selectedHalf2.name} `;
            setBase(combinedPizza);
        }
    };



    // Get the base price from the pizza data

    const initialBasePrice = () => {
        const selectedPizza = crustOptions.find(pizza => pizza.name === base);
        if (selectedPizza) {
            switch (selectedPizza.name) {
                case "Thin Crust":
                    return selectedPizza.basePrice;
                case "Cheese Stuffed Crust":
                    return selectedPizza.basePrice * 4.00;
                case "Vegan":
                    return selectedPizza.basePrice * 2.50;
                case "Stone Crust":
                    return selectedPizza.basePrice * 3;
                default:
                    return 0;
            }
        }
        return 0; // Return 0 if the selected pizza is not found
    };

    const combinationPrice = () => {
        if (selectedHalf1 && selectedHalf2) {
            const half1Price = selectedHalf1.basePrice / 2;
            const half2Price = selectedHalf2.basePrice / 2;
            const basePrice = initialBasePrice(); // Access the exported crustPrice

            console.log("Half 1 Price:", half1Price);
            console.log("Half 2 Price:", half2Price);
            console.log("Base Price:", basePrice);

            const newTotal = basePrice + half1Price + half2Price;
            setTotal(newTotal);
            console.log(newTotal);

        }
    }


        return (
            <div>
                <h1 className={"combinePizza"}>Combine two pizzas!</h1>
                <label>Select base: </label>
                <select onChange={(e) => setBase(e.target.value)}>
                    {crustOptions.map((crust) => (
                        <option key={crust} value={crust}>
                            {crust}
                        </option>
                    ))}
                </select>

                <label>Select First Pizza Half: </label>
                <select onChange={(e) => setSelectedHalf1(pizzaData.find(pizza => pizza.name === e.target.value))}>
                    {pizzaData.map((pizza) => (
                        <option key={pizza.id} value={pizza.name}>
                            {pizza.name}
                        </option>
                    ))}
                </select>

                <label>Select Second Pizza Half: </label>
                <select onChange={(e) => setSelectedHalf2(pizzaData.find(pizza => pizza.name === e.target.value))}>
                    {pizzaData.map((pizza) => (
                        <option key={pizza.id} value={pizza.name}>
                            {pizza.name}
                        </option>

                    ))}
                </select>
                <div className={"combination"}>
                    <button className ={"combinebtn"} onClick={combinePizza}>Combine</button>
                    <button className = {"combinationPricebtn"} onClick={combinationPrice}>Check Combination price</button>

                    <button className = {"cartload"} onClick = {() => addToCart({ name: base, quantity: 1, basePrice: total, setSelectedHalf1, setSelectedHalf2})}>Add to Cart</button>


                    {/* Display the combined pizza */}
                    <p>Combined Pizza: {base}</p>
                    <p>Combination Price: {total}</p>
                </div>
            </div>
        );
    }


            export default HalfAndHalf;
