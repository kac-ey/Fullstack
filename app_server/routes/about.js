var express = require("express");
var router = express.Router();
const controller = require("../controllers/about");

/* GET About Page. */
router.get("/", controller.about);

module.exports = router;