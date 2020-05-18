var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  logger.info("我的info");
  logger.debug("我的debug");
  logger.warn("我的warn");
  loggerInfo.info("我的loggerInfo info");
  loggerInfo.debug("我的loggerInfo debug");
  loggerInfo.warn("我的loggerInfo warn");
  res.render("index", { title: "Express" });
});

module.exports = router;
