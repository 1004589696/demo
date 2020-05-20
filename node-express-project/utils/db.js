// Created by cunkuan on 2017/10/13.
const mongoose = require("mongoose"),
  DB_URL = "mongodb://127.0.0.1:27017/node-express-project";

// nodeMobile库连接 可建立多个连接库
mongoose.Promise = global.Promise;
const nodeExpressProject = mongoose.createConnection(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接成功
mongoose.connection.on("connected", function () {
  console.log("Mongoose connection open to " + DB_URL);
});

// 连接异常
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

// 连接断开
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose connection disconnected");
});

exports.nodeExpressProject = nodeExpressProject;
