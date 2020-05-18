var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  logger.info("我的info");
  logger.debug("我的debug");
  logger.warn("我的warn");
  loggerInfo("我的loggerInfo");
  loggerErr("我的loggerErr");
  res.render("index", { title: "Express" });
});

module.exports = router;
