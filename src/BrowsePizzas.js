import React, {useState} from "react";
import './BrowsePizzas.css';
import PizzaCustomisation from "./PizzaCustomisation";



export const pizzaData = [
    {id: 1, name: 'Margherita (V)', basePrice: 9.99, isVegan: true, isGlutenFree: false, image:"/images/margherita.png" },
    {id: 2, name: 'Pepperoni', basePrice: 12.99, isVegan: false, isGlutenFree: false, image:"/images/pepperoni.png"},
    {id: 3, name: 'Meat Lover', basePrice: 15.99, isVegan: false, isGlutenFree: false, image:"/images/meatLovers.png"},
    {id: 4, name: 'Spicy Meatballs', basePrice: 15.99, isVegan: false, isGlutenFree: false, image:"/images/meatball.png"},
    {id: 5, name: 'Veggie Supreme (V) (GF)', basePrice: 12.99, isVegan: true, isGlutenFree: true, image:"/images/veggieSupreme.png"},
    {id: 6, name: 'American Hot', basePrice: 15.99, isVegan: false, isGlutenFree: false, image:"/images/americanHot.png"},
    {id: 7, name: 'Veggie Sizzler (V)', basePrice: 12.99, isVegan: true, isGlutenFree: false, image:"/images/veggieSizzler.png"},
    {id: 8, name: 'Hawaiian', basePrice: 15.99, isVegan: false, isGlutenFree: false,  image:"/images/hawaiian.png"},
    {id: 9, name: 'Hot and Spicy', basePrice: 12.99, isVegan: false, isGlutenFree: false, image:"/images/hotandspicy.png"},
    {id: 10, name: 'Tandoori Sizzler', basePrice: 15.99, isVegan: false, isGlutenFree: false, image:"/images/tandoori.png"},
    {id: 11, name: 'Tuna Supreme', basePrice: 12.99, isVegan: false, isGlutenFree: false, image:"/images/tuna.png"},
    {id: 12, name: 'Chicken Feast', basePrice: 15.99, isVegan: false, isGlutenFree: false, image:"/images/chickenFeast.png"},
    {id: 13, name: 'Moroccan PineApple (GF)', basePrice: 15.99, isVegan: false, isGlutenFree: true, image:"/images/moroccan.png"},
    {id: 14, name: 'Three cheese feast (V)', basePrice: 12.99, isVegan: true, isGlutenFree: false, image:"/images/threeCheese.png"},
    {id: 15, name: 'English', basePrice: 12.99, isVegan: false, isGlutenFree: false, image:"/images/english.png"},
    {id: 16, name: 'Veggie Volcano (V)', basePrice: 12.99, isVegan: true, isGlutenFree: false, image:"/images/veggieVolcano.png"}


];

function BrowsePizzas({addToCart, removeFromCart}) {
    const [isVeganFilter, setIsVeganFilter] = useState(false);
    const [isGlutenFreeFilter, setIsGlutenFreeFilter] = useState(false);





    return (
        <div>
            <h1 className={"browse"}> Browse Pizzas</h1>
            <div className="filter-options">
                <label>
                    <input
                        type="checkbox"
                        checked={isVeganFilter}
                        onChange={() => setIsVeganFilter((prev) => !prev)}
                    />
                    Vegan
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={isGlutenFreeFilter}
                        onChange={() => setIsGlutenFreeFilter((prev) => !prev)}
                    />
                    Gluten-Free
                </label>
            </div>


            <div className="pizza-list">
                {pizzaData
                    .filter(
                        (pizza) =>
                            (!isVeganFilter || pizza.isVegan) &&
                            (!isGlutenFreeFilter || pizza.isGlutenFree)
                    )
                    .map((pizza) => (
                        <div key={pizza.id} className="pizza-item">
                            <h2>{pizza.name}</h2>
                            <img
                                src={pizza.image}
                                alt={pizza.name}
                                className="pizza-image"
                            />
                            <PizzaCustomisation
                                pizza={pizza}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                            />

                        </div>
                    ))}
            </div>
      </div>
    );
}

export default BrowsePizzas;