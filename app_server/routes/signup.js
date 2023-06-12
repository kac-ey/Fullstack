const express = require('express');
const router = express.Router();
const controller = require('../controllers/signup');

/* GET home page */
router.get('/', controller.signup);
module.exports = router;