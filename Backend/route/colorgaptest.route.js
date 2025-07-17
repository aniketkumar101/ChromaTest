const express = require('express');
const router = express.Router();

const { saveColorgapResult } = require('../controller/colorgaptest.controller');

router.post("/save", saveColorgapResult);

module.exports = router;
