import React, { useContext, useEffect } from "react";
import "./Profile.css";
import UserContext from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
<<<<<<< HEAD
=======
import { CartContext } from "../../context/CartContext";
import image from "../../components/Assets/Atreya.jpg";
>>>>>>> origin/main
import { WishlistContext } from "../../context/WishlistContext";
import { OrderContext } from "../../context/OrderContext";

const Profile = () => {
  const { user, getUser } = useContext(UserContext);
  const { logout } = useContext(AuthContext);
  const { orderItems, fetchOrderItems } = useContext(OrderContext);
  const { wishlistItems, fetchWishlistItems } = useContext(WishlistContext);

  useEffect(() => {
    getUser();
    fetchWishlistItems();
    fetchOrderItems();
<<<<<<< HEAD
  });
=======
  }, []);
>>>>>>> origin/main

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
<<<<<<< HEAD
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    alt="Admin"
                    className=""
                    width={270}
                    height={270}
                  />
                  <div className="p-1">
=======
                    src={image}
                    alt="Admin"
                    className="rounded-circle p-1 bg-secondary"
                    width={230}
                    height={250}
                  />
                  <div className="mt-3   p-1">
>>>>>>> origin/main
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
                          <span>IMAGE</span>
                        </th>
                        <th className="text-center">
                          <span>NAME</span>
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
                      {orderItems.map((el) => {
                        return (
                          <tr
                            key={el.cartItem.orderItem[0].cartItem.cartItem.id}
                          >
                            <td>
                              <img
                                src={
                                  el.cartItem.orderItem[0].cartItem.cartItem
                                    .image
                                }
                                alt=""
                              />
                            </td>
                            <td>
                              <h6 className="text-center">
                                {
                                  el.cartItem.orderItem[0].cartItem.cartItem
                                    .name
                                }
                              </h6>
                            </td>
                            <td className="text-center">
                              {
                                el.cartItem.orderItem[0].cartItem.cartItem
                                  .quantity
                              }
                            </td>
                            <td className="text-center">
                              <h6>
                                ₹
                                {
                                  el.cartItem.orderItem[0].cartItem.cartItem
                                    .price
                                }
                              </h6>
                            </td>
                            <td className="text-center">
                              <h6>24/06/23</h6>
                            </td>
                          </tr>
                        );
                      })}
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
                          <span>IMAGE</span>
                        </th>
                        <th className="text-center">
                          <span>NAME</span>
                        </th>
                        <th className="text-center">
                          <span></span>
                        </th>
                        <th className="text-center">
                          <span>PRICE</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistItems.map((el) => {
                        return (
                          <tr>
                            <td>
                              <img
                                src={el.wishlistItem.wishlistItem.image}
                                alt=""
                              />
                            </td>
                            <td className="text-center">
                              <h6>{el.wishlistItem.wishlistItem.name}</h6>
                            </td>
                            <td className="text-center">
<<<<<<< HEAD
                              <h6>{""}</h6>
=======
                              <h6></h6>
>>>>>>> origin/main
                            </td>
                            <td className="text-center">
                              <h6>₹{el.wishlistItem.wishlistItem.price}</h6>
                            </td>
                          </tr>
                        );
                      })}
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
