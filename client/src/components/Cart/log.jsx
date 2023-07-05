import { useState, useEffect, useRef, useContext } from "react";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import firebase from "./Firebase";
import "firebase/auth";
import { Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { OrderContext } from "../../context/OrderContext";

export default function Log() {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");

  const navigate = useNavigate();
  const recaptchaVerifierRef = useRef(null);
  const confirmationResultRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") setMobile(value);
    else if (name === "otp") setOTP(value);
  };

  const handleNavigation = () => {
    navigate("/Profile");
  };

  useEffect(() => {
    configureCaptcha();
  });

  const configureCaptcha = () => {
    recaptchaVerifierRef.current = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: () => {
          onSignInSubmit();
          console.log("Recapta Verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "+91" + mobile;
    const appVerifier = recaptchaVerifierRef.current;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        confirmationResultRef.current = confirmationResult;
        alert("OTP has been sent");
      })
      .catch(() => {
        alert("OTP has not been sent");
      });
  };

  const { cartItems } = useContext(CartContext);
  const { addToOrder } = useContext(OrderContext);

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    confirmationResultRef.current
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("Ordered Successfully");
        addToOrder(cartItems);
        handleNavigation();
      })
      .catch(() => {
        alert("Enter the Correct OTP");
      });
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        marginTop: "30px",
      }}
    >
      <div
        className="box1"
        style={{
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          textAlign: "center",
          width: "300px",
          margin: "0 auto",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          marginLeft: "420px",
        }}
      >
        <h4
          style={{
            marginBottom: "20px",
          }}
        >
          Payment Confirmation
        </h4>
        <form
          onSubmit={onSignInSubmit}
          style={{
            marginBottom: "20px",
          }}
        >
          <div id="sign-in-button"></div>

          <label
            htmlFor="phoneNumber"
            style={{
              display: "block",
              marginBottom: "5px",
              textAlign: "left",
              fontWeight: "630",
            }}
          >
            Phone Number:
          </label>
          <Input
            type="number"
            id="phoneNumber"
            name="mobile"
            placeholder="Enter here"
            required
            onChange={handleChange}
          />
          <button
            id="bt1"
            className="otpBtn1 btn btn-danger btn-sm mx-2"
            type="submit"
          >
            Submit
          </button>
        </form>

        <form onSubmit={onSubmitOtp}>
          <label
            htmlFor="otp"
            style={{
              display: "block",
              marginBottom: "5px",
              textAlign: "left",
              fontWeight: "630",
            }}
          >
            OTP:
          </label>
          <Input
            type="number"
            id="otp"
            name="otp"
            placeholder="Enter here"
            required
            onChange={handleChange}
          />
          <button
            id="bt1"
            type="submit"
            className="otpBtn1 btn btn-danger btn-sm mx-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
