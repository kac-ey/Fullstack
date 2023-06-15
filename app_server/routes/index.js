var express = require("express");
var router = express.Router();

/* GET Home Page. */
const ctrlMain = require("../controllers/main");

router.get("/", ctrlMain.index);

module.exports = router;