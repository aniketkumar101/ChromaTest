const express = require('express');
const router = express.Router();
const { saveNumberTest } = require('../controller/numbertest.controller');

router.post('/save', saveNumberTest);

module.exports = router;
