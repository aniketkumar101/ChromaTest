const express = require('express');
const router = express.Router();

const UserDetails = require('../controllers/Users.controllers')

router.post('/createuser',UserDetails.createUser);
router.post('/login',UserDetails.loginuser);

module.exports = router