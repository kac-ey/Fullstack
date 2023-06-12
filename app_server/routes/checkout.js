const express = require('express');
const router = express.Router();
const controller = require('../controllers/checkout');

/* GET home page */
router.get('/', controller.checkout);
module.exports = router;