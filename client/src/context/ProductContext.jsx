import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async (id) => {
    const response = await fetch(`https://urban-interiors-server.vercel.app/Products/${id}`, {
      method: "GET",
    });
    const product = await response.json();
    localStorage.setItem("products", JSON.stringify(product));
    const getProduct = JSON.parse(localStorage.getItem("products"));
    setData(getProduct);
    // console.log(data);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("products"));
    if (storedData) {
      setData(storedData);
    } else {
      getData();
    }
  }, []);

  return (
    <ProductContext.Provider value={{ getData, data }}>
      {children}
    </ProductContext.Provider>
  );
};
