import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const { token } = useContext(AuthContext);

  const addToOrder = async (item) => {
    try {
      const response = await fetch("https://urban-interiors-server.vercel.app/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          orderItem: item,
        }),
      });

      const { order } = await response.json();
      setOrderItems([...orderItems, order]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrderItems = async () => {
    try {
      const response = await fetch("https://urban-interiors-server.vercel.app/orders", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      const Order = await response.json();
      setOrderItems(Order.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        fetchOrderItems,
        addToOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
