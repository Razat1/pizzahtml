import React, { useState } from "react";
import logo from './logo.png';
import './App.css';
import BrowsePizzas from './BrowsePizzas';
import Sides from './Sides';
import Help from './Help';
import Beverages from './Beverages';
import Cart from './cart'; // Make sure to import your Cart component correctly
import { CartProvider } from "./cartContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HalfAndHalf from "./halfAndhalf";
import PaymentPage from "./Payment";
import popcorn from "./popcorn.png";


function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        // Check if the combined pizza already exists in the cart
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

        if (existingItemIndex !== -1) {
            // If the item is already in the cart, increase its quantity by 1
            const updatedCartItems = [...cartItems]; // Create a new array
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems); // Update the state with the new array
        } else {
            // If the item is not in the cart, add it with quantity 1
            const newItem = { ...item, quantity: 1 };
            setCartItems([...cartItems, newItem]); // Create a new array and add the new item
        }
    };


    const removeFromCart = (itemToRemove) => {
        const updatedCart = [...cartItems];
        const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === itemToRemove.id);

        if (itemIndex !== -1) {
            if (updatedCart[itemIndex].quantity > 1) {
                // If the item quantity is greater than 1, decrement it by 1
                updatedCart[itemIndex].quantity--;
            } else {
                // If the item quantity is 1, remove the item from the cart
                updatedCart.splice(itemIndex, 1);
            }

            setCartItems(updatedCart);
        }
    };

    return (
        <CartProvider>
            <Router>
                <main>
                    <h1 className="heading">SwiftSlice Delivery</h1>
                    <div className="Title">
                        <p>Delicious pizzas delivered to your doorstep!</p>
                        <img src={logo} alt="logo" className="logo" />

                        <img src={popcorn} alt="popcorn" className="popcorn"/>
                    </div>

                    <nav>
                        <Link to="/browse-pizzas"><button className="browsePizza">Browse Pizzas</button></Link>
                        <Link to="/sides"><button className="Sides">Sides</button></Link>
                        <Link to="/beverages"><button className="Beverages">Beverages</button></Link>
                        <Link to="/help"><button className="help">Help</button></Link>
                        <Link to="/half-and-half"><button className="fiftyfifty" >50/50?</button></Link>
                        <Link to="/cart"><button className="cart">Cart</button></Link>

                    </nav>
                    <div>
                        <Routes>
                            <Route path="/browse-pizzas" element={<BrowsePizzas addToCart={addToCart} removeFromCart={removeFromCart} />} />
                            <Route path="/sides" element={<Sides addToCart={addToCart} removeFromCart={removeFromCart} />} />
                            <Route path="/beverages" element={<Beverages addToCart={addToCart} removeFromCart={removeFromCart} />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                            <Route path="/half-and-half" element={<HalfAndHalf addToCart={addToCart}/>} />
                            <Route path="/Payments" element={<PaymentPage/> }/>
                        </Routes>
                    </div>
               </main>
            </Router>
        </CartProvider>
    );
}

export default App;
