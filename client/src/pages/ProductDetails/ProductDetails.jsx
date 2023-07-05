import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import SearchContext from "../../context/SearchContext";

function ProductDetails() {
  const { data } = useContext(ProductContext);
  const [productId, setProductId] = useState(null);

  const navigate = useNavigate();
  const handleClick = (id) => {
    setProductId(id);
  };

  if (productId) {
    navigate(`/Details/${productId}`);
  }

  const { search } = useContext(SearchContext);
  console.log(search);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className=" container">
        <h1>Product Details</h1>
        <hr />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,2fr)" }}>
          {search === ""
            ? data.map((el) => {
                return (
                  <>
                    <div className="ca p-2 border my-2" key={el.id}>
                      <div className="p-info   px-3 py-3">
                        <div>
                          <h5 className="mb-0 p-name">{el.name}</h5>{" "}
                          <span>Shop Now</span>
                        </div>
                        <div className="p-price d-flex flex-row">
                          <h3> ₹{el.price}</h3>
                        </div>
                      </div>
                      <div className="text-center p-image">
                        <img src={el.image} alt=""/>{" "}
                      </div>
                      <div className="p-about">
                        <h6>
                          M.R.P :{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            {" "}
                            ₹1,499{" "}
                          </span>
                          (73% off)
                        </h6>
                        <h6>Rating : {el.rating}</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="buttons d-flex flex-row gap-3 ">
                        <button
                          className="btn btn-danger mx-3"
                          onClick={() => handleClick(el.id)}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            : filteredData.map((el) => {
                return (
                  <>
                    <div className="ca p-2 border my-2" key={el.id}>
                      <div className="p-info   px-3 py-3">
                        <div>
                          <h5 className="mb-0 p-name">{el.name}</h5>{" "}
                          <span>Professional Headphones</span>
                        </div>
                        <div className="p-price d-flex flex-row">
                          <h3> ₹{el.price}</h3>
                        </div>
                      </div>
                      <div className="text-center p-image">
                        <img src={el.image} alt=""/>{" "}
                      </div>
                      <div className="p-about">
                        <h6>
                          M.R.P :{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            {" "}
                            ₹1,499{" "}
                          </span>
                          (73% off)
                        </h6>
                        <h6>Rating : {el.rating}</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="buttons d-flex flex-row gap-3 ">
                        <button
                          className="btn btn-danger mx-3"
                          onClick={() => handleClick(el.id)}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
