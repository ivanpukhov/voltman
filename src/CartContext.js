
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart-voltman");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart-voltman", JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return [...prevItems];
            }
            return [...prevItems, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    };


    const clearCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems(prevItems => {
            const item = prevItems.find(i => i.product.id === productId);
            if (item) {
                item.quantity = quantity;
            }
            return [...prevItems];
        });
    };

    return (

        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>

            {children}
        </CartContext.Provider>
    );
};
