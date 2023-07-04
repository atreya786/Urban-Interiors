import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { token } = useContext(AuthContext);

  const addToWishlist = async (item) => {
    try {
      const response = await fetch("http://localhost:5000/wishlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          wishlistItem: item,
        }),
      });

      const { wishlistItem } = await response.json();
      setWishlistItems([...wishlistItems, wishlistItem]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWishlistItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/wishlists", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      const Wishlist = await response.json();
      setWishlistItems(Wishlist.wishlistItems);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/wishlist/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      fetchWishlistItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        fetchWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
