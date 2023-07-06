import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import { ObjectId } from "mongodb";

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Atreya-Chandan:Atreya786@my-db.0l8w9lc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  rating: Number,
  availability: Boolean,
});

const Products = mongoose.model("Products", productSchema);

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  cartItem: { type: Object, required: true },
});

const Cart = mongoose.model("Cart", cartSchema);
const Order = mongoose.model("Order", cartSchema);

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  wishlistItem: { type: Object, required: true },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

// Signup end point
app.post("/api/signup", async (req, res) => {
  const { username, newemail, newpassword, phone, address } = req.body;

  try {
    // Check if username and email are already taken
    const existingUser = await User.findOne({ newemail });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already taken" });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newpassword, salt);

    // Create new user in database
    const user = new User({
      username,
      email: newemail,
      password: hashedPassword,
      phone,
      address,
    });
    await user.save();

    // Create and sign JWT token
    const token = jwt.sign({ userId: user._id }, "secret");
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  let success = false;
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, "secret");
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Get Products end point
app.get(`/products/:id`, async (req, res) => {
  try {
    const data = await Products.find({ Products });
    // console.log(Object.keys(data[0]));
    const id = parseInt(req.params.id);
    const productData = data[0]._doc.Products;
    // console.log(productData);

    const findById = (data, id) => {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].id);
        if (data[i].id === id) {
          return data[i][Object.keys(data[i])[1]];
        }
      }
      return null;
    };

    const furnitureItems = findById(productData, id);
    // console.log(furnitureItems);
    if (furnitureItems) {
      res.json(furnitureItems);
    } else {
      res.status(500).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// User end point
async function getUser(_id) {
  try {
    const user = await User.findOne({ _id });
    // console.log(user);
    return user || null;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user details from the database");
  }
}

// Get user end point
app.get("/user", async (req, res) => {
  const token = JSON.parse(req.headers.authorization);
  // console.log(token);

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    // console.log(decoded.user.id);

    const user = await getUser(decoded.user.id);
    // console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid token" });
  }
});

// Order post end point
app.post("/orders", async (req, res) => {
  const cartItem = req.body;
  const token = JSON.parse(req.headers.authorization);
  // console.log(token);
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const order = await Order.create({ userId, cartItem });

    res.status(201).json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding item to cart" });
  }
});

// Order get end point
app.get("/orders", async (req, res) => {
  const token = JSON.parse(req.headers.authorization);
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const orders = await Order.find({ userId });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching cart items" });
  }
});
// Cartitem post end point
app.post("/carts", async (req, res) => {
  const cartItem = req.body;
  const token = JSON.parse(req.headers.authorization);
  // console.log(token);
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const order = await Cart.create({ userId, cartItem });

    res.status(201).json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding item to cart" });
  }
});

// Cartitem get end point
app.get("/carts", async (req, res) => {
  const token = JSON.parse(req.headers.authorization);
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const orders = await Cart.find({ userId });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching cart items" });
  }
});

// Endpoint to update an cart item
app.put("/carts/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const updatedCartItem = req.body.cartItem;

    const updatedOrderItem = await Cart.findOneAndUpdate(
      { _id: itemId },
      updatedCartItem,
      { new: true }
    );

    if (!updatedOrderItem) {
      return res.status(404).json({ error: "Order item not found" });
    }

    // Return the updated order item as the response
    res.json({
      message: "Order item updated successfully",
      orderItem: updatedOrderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete cart item end point
app.delete("/carts/:itemId", async (req, res) => {
  const { itemId } = req.params;
  const token = JSON.parse(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const userOrder = await Cart.find({ userId });
    // console.log(userOrder);

    if (!userOrder) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Filter out the item with the matching itemId
    await Cart.findOneAndDelete({ userId, _id: new ObjectId(itemId) });

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error removing item from cart" });
  }
});

// Wishlist post endpoint
app.post("/wishlists", async (req, res) => {
  const wishlistItem = req.body;
  const token = JSON.parse(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const wishlist = await Wishlist.create({ userId, wishlistItem });

    res.status(201).json({ wishlist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding item to wishlist" });
  }
});

// Wishlist get endpoint
app.get("/wishlists", async (req, res) => {
  const token = JSON.parse(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded.user.id;

    const wishlistItems = await Wishlist.find({ userId });

    res.json({ wishlistItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching wishlist items" });
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));
