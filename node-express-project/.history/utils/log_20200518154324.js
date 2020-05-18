'use strict';

const path = require("path");
const log4js = require("log4js");

log4js.configure({
  appenders: [
    {
      type: "console",
      category: "console",
    },
  ],
  replaceConsole: true,   //替换console.log
});
