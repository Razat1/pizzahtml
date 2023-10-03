import React, { createContext, useContext, useReducer } from "react";

const initialState = {
    items: [],
    total: 0,
};

export const cartContext = createContext();



export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if the item already exists in the cart
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity++;
                return {
                    ...state,
                    items: updatedItems,
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        case "REMOVE_FROM_CART":
            const updatedItemsRemove = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                items: updatedItemsRemove,
            };
        case "CLEAR_CART":
            return {
                ...state,
                items: [], // Clear the items array to empty the cart
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(cartContext);
};

