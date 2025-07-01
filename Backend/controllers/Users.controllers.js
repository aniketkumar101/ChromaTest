const User = require('../model/Users.model');
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
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists, please try another" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ message: "User created successfully", user: newUser });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
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
