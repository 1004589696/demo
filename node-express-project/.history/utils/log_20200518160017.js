"use strict";

const path = require("path");
const log4js = require("log4js");
let baseLogPath = path.resolve(__dirname, "./logs");

log4js.configure({
  appenders: {
    console: {
      type: "console",
    },
    infoLogger: {
      type: "dateFile", // 日志类型
      filename: baseLogPath + "/info/info", // 输出文件名
      pattern: "-yyyy-MM-dd-hh.log", // 后缀
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: "utf-8", // 编码格式
      maxLogSize: 1000, // 最大存储内容
    },
    errLogger: {
      type: "dateFile", // 日志类型
      filename: baseLogPath + "/error/error", // 输出文件名
      pattern: "-yyyy-MM-dd-hh.log", // 后缀
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: "utf-8", // 编码格式
      maxLogSize: 1000, // 最大存储内容
    },
  },
  replaceConsole: true, //替换console.log
  categories: {
    default: {
      appenders: ["console"],
      level: "all",
    },
    infoLogger: {
      appenders: ["infoLogger"],
      level: "info",
    },
    errLogger: {
      appenders: ["errLogger"],
      level: "error",
    },
  },
});
