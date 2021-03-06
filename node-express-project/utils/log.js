"use strict";

const path = require("path");
const log4js = require("log4js");
let baseLogPath = path.resolve(__dirname, "../data/logs");

log4js.configure({
  appenders: {
    console: {
      type: "console",
    },
    infoLogger: {
      type: "dateFile", // 日志类型
      filename: baseLogPath + "/info/info", // 输出文件名
      pattern: ".yyyy-MM-dd.log", // 后缀
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: "utf-8", // 编码格式
      maxLogSize: 1000, // 最大存储内容
      backups: 50, // backups:备份的文件个数最大值,最新数据覆盖旧数据
    },
    errLogger: {
      type: "dateFile", // 日志类型
      filename: baseLogPath + "/error/error", // 输出文件名
      pattern: ".yyyy-MM-dd.log", // 后缀
      alwaysIncludePattern: true, // 上面两个参数是否合并
      encoding: "utf-8", // 编码格式
      maxLogSize: 1000, // 最大存储内容
      backups: 50, // backups:备份的文件个数最大值,最新数据覆盖旧数据
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

global.logger = log4js.getLogger();
global.loggerInfo = log4js.getLogger("infoLogger");
global.loggerError = log4js.getLogger("errLogger");
