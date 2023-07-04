import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

function Details() {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const { data } = useContext(ProductContext);
  const { id } = useParams();
  const selectedProduct = data.find((product) => product.id === parseInt(id));

  const { addToCart, removeFromCart } = useContext(CartContext);
  const handleAdd = (item) => {
    addToCart(item);
    setAdded(true);
  };
  const handleRemove = (id) => {
    removeFromCart(id);
    setAdded(false);
  };
  const handleNavigate = () => {
    navigate("/Cart");
  };

  const handleReturn = () => {
    navigate("/Productdetails");
  };

  const [wishlist, setWishlist] = useState(false);
  const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
    setWishlist(true);
  };

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishlist(itemId);
    setWishlist(false);
  };

  return (
    <div className="container">
      {selectedProduct && (
        <div key={selectedProduct.id}>
          <h1>{selectedProduct.name}</h1>

          <div className="row border my-1">
            <div className="col-lg-6">
              <img
                src={selectedProduct.image}
                alt=""
                className="my-4"
                style={{ width: "450px" }}
              />
            </div>
            <div className="col-lg-6 my-2">
              <h2> {selectedProduct.name}</h2>
              <p> 1,146 ratings | 4 answered questions</p>
              <hr />
              <h4>Price : {selectedProduct.price}</h4>
              <h4>Rating : {selectedProduct.rating}</h4>
              <h5>
                M R P :{" "}
                <span style={{ textDecoration: "line-through" }}>₹1,499</span>
              </h5>
              <div className="p-detail my-2">
                <h5>
                  <u>Description</u>
                </h5>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  inventore voluptate autem ducimus dolor temporibus, molestiae
                  aperiam iure, reprehenderit exercitationem ex suscipit
                  corporis! Veritatis minima iure aspernatur cupiditate
                  doloremque, eligendi vero consequuntur esse repellat qui
                  deleniti culpa repudiandae nobis possimus reiciendis, modi
                  totam nihil quos officiis tempore, a pariatur est?
                </p>
                <h5>
                  Availability:{" "}
                  {selectedProduct.availability ? "In Stock" : "Out of Stock"}
                </h5>
                {!added ? (
                  <>
                    <button
                      className="btn btn-danger"
                      style={{ marginRight: "8px" }}
                      onClick={() => handleAdd(selectedProduct)}
                    >
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(selectedProduct.id)}
                    >
                      Remove from Cart
                    </button>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={handleNavigate}
                    >
                      Go to Cart
                    </button>
                  </>
                )}
                {!wishlist ? (
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginRight: "8px" }}
                    onClick={() => handleAddToWishlist(selectedProduct)}
                  >
                    Add to Wishlist
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginRight: "8px" }}
                    onClick={() => handleRemoveFromWishlist(selectedProduct.id)}
                  >
                    Remove from Wishlist
                  </button>
                )}
                <button
                  className="btn btn-outline-danger"
                  onClick={handleReturn}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <h1>Recommendations</h1>
    </div>
  );
}

export default Details;
