import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container">
      <div className="row my-2 ">
        <div className="col-lg-6 home-text my-5 text-start">
          <h1
            style={{
              marginLeft: "1.3rem",
              marginTop: "6rem",
              fontSize: "4rem",
            }}
          >
            <span>Modern Funiture</span> <br />
            For Your House
          </h1>
          <h6 style={{ marginLeft: "1.5rem" }} className="text-w">
            We understand your need for home decor
            <br />
            with unique decorative accesssories
          </h6>
          <Link to="/Categories" className="btn btn-danger btn-lg mx-4 my-3">
            Shop More
          </Link>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid logo my-5"
            src="https://hometown.gumlet.io/media/product/08/2073/48465/1.jpg?mode=fill&h=360&w=360&dpr=1.5"
            alt=""
          />
        </div>
      </div>
      <hr />
      <h2 className="">
        <span>
          <b>| </b>
        </span>
        Limited Offer
      </h2>
      <div>
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-livingroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Living room furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <Link to="/Categories" className="btn btn-danger">Shop Now</Link>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-bedroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Bedroom furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <Link to="/Categories" className="btn btn-danger">Shop Now</Link>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstarted-diningroom.png"
              style={{ width: "100%", height: "90%", borderRadius: "10px" }}
              alt=""
            />
            <h4>
              <b>Dining room furniture</b>
            </h4>
            <h5 className="text-w">Upto 50% Off</h5>
            <Link to="/Categories" className="btn btn-danger">Shop Now</Link>
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{ marginTop: "7rem" }}>
        <h2 className="text-center text-w">
          {" "}
          <b>SHOP FURNITURE AT URBAN INTERIORS</b>
        </h2>
        <img
          className="img-fluid my-2"
          src="https://images.furnituredealer.net/img/dealer/-1/upload/getstarted/getstartedhero.png"
          alt="error"
        />
      </div>
      <hr />
    </div>
  );
};

export default Banner;
