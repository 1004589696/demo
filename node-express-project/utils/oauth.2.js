var passport = require("passport");
var BearerStrategy = require("passport-http-bearer").Strategy;
var jwt = require("jsonwebtoken");
var secretOrPrivateKey = "ck_ding";
var bcrypt = require("bcrypt");
var User = require("../schema/user.js");

// passport  OAuth 2.0
passport.use(
  "bearer",
  new BearerStrategy(function (token, done) {
    if (token) {
      jwt.verify(token, secretOrPrivateKey, function (err, decoded) {
        if (err) {
          return done(null, false);
        }
        if (decoded) {
          User.findOne({ phone: decoded.phone }, function (err, findResult) {
            if (err) {
              return done(null, false);
            }
            if (findResult) {
              bcrypt.compare(decoded.password, findResult.password, function (
                err,
                result
              ) {
                if (err) {
                  return done(null, false);
                }
                if (result) {
                  return done(null, result);
                } else {
                  return done(null, false);
                }
              });
            } else {
              return done(null, false);
            }
          });
        } else {
          return done(null, false);
        }
      });
    } else {
      return done(null, false);
    }
  })
);
