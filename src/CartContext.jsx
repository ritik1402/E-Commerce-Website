import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ Load cart from localStorage when app starts 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


    // ✅ Add to Cart function (Checks if item exists)
    const addToCart = (item) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((p) => p.id === item.id);
        if (existingItem) {
          return prevCart.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
          );
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }
      });
    };

      // ✅ Update Quantity function
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };



  // Remove from cart function
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //store cart in local storage
  useEffect(() => {
    
    localStorage.setItem("cart", JSON.stringify(cart)); // ✅ Save to localStorage on update
  }, [cart]); // ✅ Runs every time cart updates

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
