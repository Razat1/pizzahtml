// PaymentPage.js

import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './Payments.css';
import { useCart } from './cartContext'; // Import the cart context

function PaymentPage() {
    const paypalClientID = 'AZCICIllamkGxhzO-z59vGSQltfHkNnwymMrRstvN7f_hDGFJF65jIQRtp05roiv-IlmggQV3iL3zYh5'; // Replace with your PayPal Client ID
    const { dispatch } = useCart(); // Get the cart dispatch function

    useEffect(() => {
        // Assuming a successful payment, clear the cart
        dispatch({ type: 'CLEAR_CART' });
    }, [dispatch]);

    return (
        <div>
            <h2>Payment Page</h2>

            <PayPalScriptProvider options={{ 'client-id': paypalClientID }}>
                <div className="paypal-buttons-container">
                    <PayPalButtons style={{ layout: 'vertical' }} />
                </div>
            </PayPalScriptProvider>
        </div>
    );
}

export default PaymentPage;
