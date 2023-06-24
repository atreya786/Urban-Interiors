import React, { useContext } from "react";
import "./Profile.css";
import UserContext from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import image from "../../components/Assets/Atreya.jpg"

const Profile = () => {
  const { user } = useContext(UserContext);
  const { logout } = useContext(AuthContext);
  const { cartItems, wishListItems } = useContext(CartContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="container">
      <div className="main-body">
        <div className="row my-2">
          <div className="col-lg-4">
            <div className="card p-card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={image}
                    alt="Admin"
                    className="rounded-circle p-1 bg-secondary"
                    width={230}
                    height={250}

                  />
                  <div className="mt-3   p-1">
                    <h4>
                      {" "}
                      <b>{user.username}</b>
                    </h4>
                    <h6 className=" mb-1">
                      Email : <b>{user.email}</b>
                    </h6>
                    <h6 className=" mb-1">
                      Phone: <b>{user.phone}</b>
                    </h6>
                    <h6 className=" mb-1">
                      Adress : <b>{user.address}</b>
                    </h6>

                    <button
                      className="btn btn-danger my-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    {/* <button className="btn btn-outline-danger mx-1">Message</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="main-box no-header clearfix">
              <div className="main-box-body clearfix">
                <div className="table-responsive">
                <h2>My Orders</h2>
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>PRODUCTS</span>
                        </th>
                        <th className="text-center">
                          <span>QUANTITY</span>
                        </th>

                        <th className="text-center">
                          <span>Price</span>
                        </th>
                        <th className="text-center">
                          <span>Order Placed</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products/signature_design_by_ashley/color/mirimynh505_h505-610-b1.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
                            alt=""
                          />
                          <h6>Small Desk</h6>
                        </td>
                        <td className="text-center">1</td>
                        <td className="text-center">
                          <h6>₹5999</h6>
                        </td>
                        <td className="text-center">
                          <h6>24/06/23</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/72ef7626bf41485bb61ef711c5451d66.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
                            alt=""
                          />
                          <h6>Desk Chair</h6>
                        </td>
                        <td className="text-center">1</td>
                        <td className="text-center">
                          <h6>₹3999</h6>
                        </td>
                        <td className="text-center">
                          <h6>24/06/23</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div className="table-responsive">
                  <hr />
                  <h2>Wishlist</h2>
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>PRODUCTS</span>
                        </th>
                        <th className="text-center">
                          <span></span>
                        </th>
                        <th className="text-center">
                          <span></span>
                        </th>
                        <th className="text-center">
                          <span>Price</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZbCfO6WFifpPcFqpzoOGV01WdpMJ9UABjw&usqp=CAU"
                            alt=""
                          />
                          <h6>Om Wall Hanging</h6>
                        </td>
                        <td className="text-center">
                          <h6></h6>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <h6>₹3999</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fsignature_design_by_ashley%2fcolor%2fstracelen_8060320%2b14-b1.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
                            alt=""
                          />
                          <h6>Sofa and Ottoman</h6>
                        </td>
                        <td className="text-center"></td>
                        <td className="text-center">
                          <h6></h6>
                        </td>
                        <td className="text-center">
                          <h6>₹24999</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
