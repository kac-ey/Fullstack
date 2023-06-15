const express = require("express");
const router = express.Router();
const controller = require("../controllers/travel");

/* GET Travel List */
router.get("/", controller.travelList);

module.exports = router;