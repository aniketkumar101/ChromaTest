const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const UserDetails = require('../controller/users.controller');

router.post(
  '/createuser',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    body('name', 'Name is required').notEmpty()
  ],
  UserDetails.createuser
);

router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password is required').exists()
  ],
  UserDetails.loginuser
);

module.exports = router;

