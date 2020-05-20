var express = require("express");
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var secretOrPrivateKey = "ck_ding";
var User = require("../schema/user.js");
var Validate = require("../utils/validate.js");

/* POST users register. 注册 */
router.post("/register", function (req, res, next) {
  var phone = req.body.phone;
  var password = req.body.password;
  if (!phone) {
    return res.json({ status: false, message: "手机号为空" });
  } else if (!Validate.phone(phone)) {
    return res.json({ status: false, message: "手机号格式错误" });
  }
  if (!password) {
    return res.json({ status: false, message: "密码为空" });
  }
  User.findOne({ phone: phone }, function (err, findResult) {
    if (err) {
      return res.json(500, { err: err });
    }
    if (findResult) {
      return res.json({ status: false, message: "手机号已注册" });
    } else {
      // 往数据库表中插入数据
      var userData = new User({
        phone: phone,
        password: password,
      });
      userData.save(function (err, saveResult) {
        if (err) {
          return res.json(500, { err: err });
        }
        var refresh_token = jwt.sign(
          { phone: phone, password: password },
          secretOrPrivateKey,
          {
            expiresIn: 60 * 60 * 24 * 2, // 2*24小时过期
          }
        );
        var access_token = jwt.sign(
          { phone: phone, password: password },
          secretOrPrivateKey,
          {
            expiresIn: 60 * 60 * 24, // 24小时过期
          }
        );
        return res.json({
          status: true,
          message: "成功~",
          data: {
            access_token: access_token,
            refresh_token: refresh_token,
          },
        });
      });
    }
  });
});

/* POST users login. 登录 */
router.post("/login", function (req, res, next) {
  var phone = req.body.phone;
  var password = req.body.password;
  if (!phone) {
    return res.json({ status: false, message: "手机号为空" });
  } else if (!Validate.phone(phone)) {
    return res.json({ status: false, message: "手机号格式错误" });
  }
  if (!password) {
    return res.json({ status: false, message: "密码为空" });
  }
  User.findOne({ phone: phone }, function (err, findResult) {
    if (err) {
      return res.json(500, { err: err });
    }
    if (findResult) {
      bcrypt.compare(password, findResult.password, function (err, result) {
        if (err) {
          return res.json(500, { err: err });
        }
        if (result) {
          var refresh_token = jwt.sign(
            { phone: phone, password: password },
            secretOrPrivateKey,
            {
              expiresIn: 60 * 60 * 24 * 2, // 2*24小时过期
            }
          );
          var access_token = jwt.sign(
            { phone: phone, password: password },
            secretOrPrivateKey,
            {
              expiresIn: 60 * 60 * 24, // 24小时过期
            }
          );
          return res.json({
            status: true,
            message: "成功~",
            data: {
              access_token: access_token,
              refresh_token: refresh_token,
            },
          });
        } else {
          return res.json({ status: false, message: "帐户或密码错误" });
        }
      });
    } else {
      return res.json({ status: false, message: "帐户或密码错误" });
    }
  });
});

/* GET users listing. */
router.get(
  "/info",
  passport.authenticate("bearer", { session: false }),
  function (req, res, next) {
    User.findOne(req.query, function (err, findResult) {
      if (err) {
        return res.json(500, { err: err });
      }
      return res.json({ status: true, data: findResult });
    });
  }
);

/* get users 列表 */
router.get("/list", function (req, res, next) {
  User.find(
    {},
    { test: 0, password: 0, updateTime: 0, createTime: 0 },
    function (err, findResult) {
      if (err) {
        return res.json(500, { err: err });
      }
      return res.json({
        status: true,
        message: "成功~",
        data: findResult,
      });
    }
  );
});

module.exports = router;
