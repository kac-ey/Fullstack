const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

// GET home page
router.get('/:code', controller.tripsFindCode);
router.get('/', controller.tripsList);
module.exports = router;