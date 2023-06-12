const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin');

/* GET home page */
router.get('/', controller.admin);
module.exports = router;