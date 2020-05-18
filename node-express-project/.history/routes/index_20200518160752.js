var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  Log.info("我的info");
  Log.debug("我的debug");
  Log.warn("我的warn");
  res.render("index", { title: "Express" });
});

module.exports = router;
