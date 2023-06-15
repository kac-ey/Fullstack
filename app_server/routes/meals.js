var express = require("express");
var router = express.Router();
const controller = require("../controllers/meals");

/* GET Meals Page. */
router.get("/", controller.meals);

module.exports = router;