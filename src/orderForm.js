import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderForm.css";

const OrderForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [instructions, setInstructions] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showProceedButton, setShowProceedButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if required fields are empty
        if (!name || !phoneNumber || !address) {
            setError("Please fill in all required fields.");
            return;
        }
        setSubmitted(true);
        setShowProceedButton(true);
    };

    return (
        <div>
            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>Full Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    required
                />

                <label>Phone Number: </label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    pattern="[0-9]{11}"
                    placeholder="123 4567 8901"
                    required
                />

                <label>Address: </label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main Street, City, Post code"
                    required
                />

                <label>Special Instructions: </label>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                ></textarea>

                <nav>
                    <button type="submit">Submit Order</button>
                    {showProceedButton && (
                        <Link to="/Payments">
                            <button>Proceed to Payments</button>
                        </Link>
                    )}
                </nav>
            </form>
        </div>
    );
};

export default OrderForm;
