const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());

const client = mongoose.connect("mongodb://127.0.0.1:27017/Urban-Interiors");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  rating: Number,
  availability: Boolean,
});

const Products = mongoose.model("Products", productSchema);

const User = mongoose.model("User", UserSchema);

app.use(bodyParser.json());

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

app.listen(5000, () => console.log("Server started on port 5000"));
