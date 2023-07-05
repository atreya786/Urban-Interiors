import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useContext(AuthContext);

  const addToCart = async (item) => {
    try {
      const response = await fetch("https://urban-interiors-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          cartItem: item,
        }),
      });

      const { order } = await response.json();
      setCartItems([...cartItems, order]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await fetch("https://urban-interiors-server.vercel.app/carts", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      const Order = await response.json();
      setCartItems(Order.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await fetch(`https://urban-interiors-server.vercel.app/carts/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        fetchCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



export { CartContext, CartProvider };
