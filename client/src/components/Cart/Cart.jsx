import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPlus,
  faMinus,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import Log from "./log";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0.0);
  const [name, setCardName] = useState("");
  const [cvv, setCardCvv] = useState("");
  const [expiry, setCardExp] = useState("");
  const [cardNum, setCardNum] = useState("");
  const shipping = 20.0;
  const { cartItems, removeFromCart, fetchCartItems } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    const c = cardNum;
    const cardName = name;
    const cardcvv = cvv;
    const cardexpiry = expiry;

    if (
      c.length === 16 &&
      cardName !== "" &&
      cardcvv.length === 3 &&
      cardexpiry.length === 5 &&
      cardexpiry.charAt(2) === "/"
    ) {
      setShow(true);
    } else {
      alert("Fill The Correct Card Details");
    }
  };

  const updateCartItem = async (item) => {
    try {
      const response = await fetch(
        `https://urban-interiors-server.vercel.app/carts/${item._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            cartItem: item,
          }),
        }
      );

      if (response.ok) {
        // Item updated successfully
        console.log("Item updated successfully");
      } else {
        // Error updating item
        console.log("Error updating item");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQuantity = (item) => {
    if (item.cartItem.cartItem.quantity > 1) {
      item.cartItem.cartItem.quantity--;
      updateCartItem(item); // Update the item on the backend
    }
    calculateSubtotal();
  };

  const increaseQuantity = (item) => {
    if (item.cartItem.cartItem.quantity < 5) {
      item.cartItem.cartItem.quantity++;
      updateCartItem(item); // Update the item on the backend
    }
    calculateSubtotal();
  };

  const calculateSubtotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.cartItem.cartItem.price * item.cartItem.cartItem.quantity;
    });
    setSubtotal(sum);
  };

  useEffect(() => {
    fetchCartItems();
    calculateSubtotal();
  });

  const totalPrice = subtotal + parseFloat(shipping);

  return (
    <div className="container mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="product-details mr-2">
            <div className="d-flex flex-row align-items-center">
              <i className="fa fa-long-arrow-left"></i>
              <span className="ml-2">
                <h1>
                  CART <FontAwesomeIcon icon={faCartFlatbed} size="xs" />
                </h1>
              </span>
            </div>
            <hr />
            <div className="disp" style={{ display: "flex" }}>
              <span>
                <h2>𝐈𝐭𝐞𝐦 𝐋𝐢𝐬𝐭</h2>
              </span>
              <span style={{ marginLeft: "340px" }}>
                <h2>𝑄𝑡𝑦</h2>
              </span>
              <span style={{ marginLeft: "90px" }}>
                <h2> 𝑃𝑟𝑖𝑐𝑒 </h2>
              </span>
              <hr />
            </div>

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="d-flex justify-content-between align-items-center mt-2 p-2 items rounded"
              >
                <div className="d-flex flex-row">
                  <img
                    className="rounded"
                    src={item.cartItem.cartItem.image}
                    width="40"
                    alt="Product"
                  />
                  <div className="ml-2">
                    <span className="font-weight-bold d-block">
                      {item.cartItem.cartItem.name}
                    </span>
                    <span className="spec">
                      {item.cartItem.cartItem.description}
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="d-block px-5 mx-2">
                    <button
                      className="cart1"
                      style={{
                        borderRadius: "5px",
                        position: "absolute",
                        right: "250px",
                        marginTop: "-11px",
                      }}
                      onClick={() => decreaseQuantity(item)}
                    >
                      <FontAwesomeIcon icon={faMinus} beat />
                    </button>
                    <span
                      style={{
                        position: "absolute",
                        right: "230px",
                        marginTop: "-11px",
                      }}
                    >
                      {item.cartItem.cartItem.quantity}
                    </span>
                    <button
                      style={{
                        borderRadius: "5px",
                        position: "absolute",
                        right: "190px",
                        marginTop: "-11px",
                      }}
                      className="mx-1"
                      onClick={() => increaseQuantity(item)}
                    >
                      <FontAwesomeIcon icon={faPlus} beat />
                    </button>
                  </span>

                  <span className="d-block ml-3 font-weight-bold mx-2">
                    ₹{item.cartItem.cartItem.price}
                  </span>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="ml-3 cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="payment-info ">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <h3>Card Details</h3>
              </span>
              <img
                className="rounded"
                src="https://i.imgur.com/WU501C8.jpg"
                width="30"
                alt="Card Logo"
              />
            </div>
            <span className="type d-block mt-3 mb-1"> Card Type</span>
            <label className="radio mr-3">
              <input type="radio" name="card" value="payment" checked />
              <span>
                <img
                  width="30"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec5bMJlhA3UUUebHzNiCwM9eHXxgnWGyj6p_PBmNXPw&usqp=CAU&ec=48665701"
                  alt="Card Type"
                />
              </span>
            </label>
            <label className="radio mr-3">
              <input type="radio" name="card" value="payment" checked />
              <span>
                <img
                  width="30"
                  src="https://d28wu8o6itv89t.cloudfront.net/images/SBIClassicRuPaydebitcardpng-1605774227735.png"
                  alt="Card Type"
                />
              </span>
            </label>
            <label className="radio mr-3">
              <input type="radio" name="card" value="payment" checked />
              <span>
                <img
                  width="30"
                  src="https://d28wu8o6itv89t.cloudfront.net/images/sbirupayplatinumdebitcardjpg-1605774213297.jpeg"
                  alt="Card Type"
                />
              </span>
            </label>
            <label className="radio mr-3">
              <input type="radio" name="card" value="payment" checked />
              <span>
                <img
                  width="30"
                  src="https://img.icons8.com/color/48/000000/mastercard.png"
                  alt="Card Type"
                />
              </span>
            </label>
            <div>
              <label className="credit-card-label">Name on card</label>
              <input
                type="text"
                className="form-control credit-inputs"
                placeholder="Name"
                required
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div>
              <label className="credit-card-label">Card number</label>
              <input
                type="text"
                className="form-control credit-inputs"
                placeholder="0000 0000 0000 0000"
                required
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="credit-card-label">Expiry</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="12/24"
                  required
                  onChange={(e) => setCardExp(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="credit-card-label">CVV</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeholder="342"
                  required
                  onChange={(e) => setCardCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="total mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold">Total</span>
              <span className="font-weight-bold">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-danger btn-block"
                onClick={handleShow}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div>{show && <Log />}</div>
      </div>
    </div>
  );
};

export default Cart;
