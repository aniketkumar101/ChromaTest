const User = require('../model/users.model');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "ldklkfkldlfldlfldfldlfdjfdfj";

// ==============================
// CREATE USER
// ==============================
const createuser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(password, salt);

    user = await User.create({ name, email, password: securedPassword });

    const data = { user: { id: user.id } };
    const authToken = jwt.sign(data, jwtSecret, { expiresIn: '1h' });

    res.status(201).json({ success: true, message: "success", authToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


// ==============================
// LOGIN USER
// ==============================
const loginuser = async (req, res) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Compare password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Password is incorrect" });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user._id
            }
        };
        const authToken = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ success: true, authToken });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Server error" });
    }
};



module.exports = {
    createuser,
    loginuser
};
