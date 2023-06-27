import React, { createContext, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { token } = useContext(AuthContext);

  const addToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:5000/orders", {
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
      const response = await fetch("http://localhost:5000/orders", {
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
  // console.log(cartItems);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromCart = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/orders/${itemId}`, {
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

  const removeFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  // console.log(cartItems);
  // console.log(wishlistItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        wishlistItems,
        fetchCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
