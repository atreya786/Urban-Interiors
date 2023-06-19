const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Urban-Interiors")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

app.use(bodyParser.json());

// Signup end point
app.post("/api/signup", async (req, res) => {
  const { username, email, password, phone, address } = req.body;

  try {
    // Check if username and email are already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already taken" });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user in database
    const user = new User({
      username,
      email,
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

app.listen(5000, () => console.log("Server started on port 5000"));
