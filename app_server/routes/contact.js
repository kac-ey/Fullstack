var express = require("express");
var router = express.Router();
const controller = require("../controllers/contact");

/* GET Contact Page. */
router.get("/", controller.contact);

module.exports = router;