const Schema = require("mongoose").Schema;
const db = require("../utils/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// 数据模型
var User = new Schema(
  {
    phone: {
      type: String,
      required: true,
      trim: true,
      match: RegExp(/^1[3456789]\d{9}$/),
    },
    password: { type: String, required: true },
    gender: { type: String, default: null },
    age: { type: Number, default: null },
    mailbox: { type: String, default: null },
    avatar: { type: String, default: null },
    nickname: { type: String, default: null },
    createTime: Date,
    updateTime: Date,
    // test: {
    //   type: String,
    //   lowercase: true, // 总是将test的值转化为小写
    //   uppercase: true, // 总是将test的值转化为大写
    //   required: false, //设定是否必填
    //   default: "", //设定默认值
    //   index: true, //设定索引值
    //   unique: true, //索引值唯一
    //   sparse: true, //是否启用稀疏索引
    //   // match: RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/), //判断是否通过正则验证
    //   // enum: Array, //判断test值是否包含于enmu对应的数组中
    //   // min: Number, //判断对应值是否大于等于给定值
    //   // max: Number, //判断对应值是否小于等于给定值
    //   trim: true, //去除数据前后的空格
    //   capped: 1024, //限定大小最大为1024字节
    //   // validate: (v) => Math.round(v), //为此属性添加一个验证器函数，如demo1所示
    //   get: (v) => "get", //为这个属性定义一个定制的getter Object.defineProperty()。如demo2所示
    //   set: (v) => "set", //定义此属性的自定义设置Object.defineProperty()。如demo2所示
    // },
  },
  {
    autoIndex: false,
    versionKey: false, // 不设置的话，数据表中多一个 _v 字段
    timestamps: { createdAt: "createTime", updatedAt: "updateTime" },
  }
);

// 使用pre中间件在用户信息存储前进行密码加密
User.pre("save", function (next) {
  const that = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(that.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      that.password = hash;
      next();
    });
  });
});

module.exports = db.nodeExpressProject.model("User", User);
