const express = require('express');
const router = express.Router();
const controller= require('../controllers/users');

/* GET home page. */
router.get('/', controller.users);

module.exports = router;
