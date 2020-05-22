import axios from "axios";

const $axios = {
  G0001(params) {
    return axios.get("/qfy/fwCaptcha", { responseType: "arraybuffer" });
  },
};

const apiUrl = {
  Q0001: "/qfy/qfyLogin",
  Q0002: "/qfy/entp/add",
  Q0003: "/qfy/entp/sendSms",
  Q0004: "/qfy/logout",
  Q0005: "/qfy/getEnum",
  Q0006: "/qfy/region",


  w0001: "/qfy/region",
  w0002: "/qfy/getEnum",
  w0003: "/qfy/getBlance",
  w0004: "/qfy/logout",
  w0005: "/qfy/login4Acct",
  w0006: "/qfy/login4Entp",
  w0007: "/qfy/acct/reOpenSend",
  w0008: "/qfy/acct/del",
  w0009: "/qfy/acct/getInfo",
  w0010: "/qfy/acct/list",
  w0011: "/qfy/acct/save",
  w0012: "/qfy/acct/upd",
  w0013: "/qfy/addr/add",
  w0014: "/qfy/addr/del",
  w0015: "/qfy/addr/getInfo",
  w0016: "/qfy/addr/list",
  w0017: "/qfy/addr/setDef",
  w0018: "/qfy/addr/upd",
  w0019: "/qfy/appMng/adminDo",
  w0020: "/qfy/appMng/detail",
  w0021: "/qfy/appMng/findAccts",
  w0022: "/qfy/appMng/getAcct",
  w0023: "/qfy/appMng/list",
  w0024: "/qfy/dept/data",
  w0025: "/qfy/dept/del",
  w0026: "/qfy/dept/orderBy",
  w0027: "/qfy/dept/save",
  w0028: "/qfy/dept/upd",
  w0029: "/qfy/entp/add",
  w0030: "/qfy/entp/authDo",
  w0031: "/qfy/entp/authInfo",
  w0032: "/qfy/entp/sendSms",
  w0033: "/qfy/entpOt/confirm",
  w0034: "/qfy/entpOt/download",
  w0035: "/qfy/entpOt/list",
  w0036: "/qfy/entpOt/process",
  w0037: "/qfy/entpSet/checkPhone",
  w0038: "/qfy/entpSet/info",
  w0039: "/qfy/entpSet/sendEmail",
  w0040: "/qfy/entpSet/sendNote",
  w0041: "/qfy/entpSet/updEmail",
  w0042: "/qfy/entpSet/updPhone",
  w0043: "/qfy/entpSet/updPwd",
  w0044: "/qfy/home/acct",
  w0045: "/qfy/home/appUrl",
  w0046: "/qfy/home/entp",
  w0047: "/qfy/home/getBlance",
  w0048: "/qfy/home/openApp",
  w0049: "/qfy/home/quit",
  w0050: "/qfy/home/recharge",
  w0051: "/qfy/moneyLog/list",
  w0052: "/qfy/moneyLog/recharge",
  w0053: "/qfy/moneyPm/getInfo",
  w0054: "/qfy/moneyPm/list",
  w0055: "/qfy/entpOrder/getAppInfo", // 应用购买--应用详情
  w0056: "/qfy/entpOrder/addOrderCache", // 应用购买--下单续费
  w0057: "/qfy/entpOrder/getOrderCache", // 应用购买--下单续费--下一步获取缓存订单详情
  w0058: "/qfy/entpOrder/addOrder", // 应用购买--下单续费--确认订单
  w0059: "/qfy/entpOrder/details", // 应用购买--订单详情
  w0060: "/qfy/entpOrder/orderPay", // 应用购买--订单付款
  w0061: "/qfy/entpOrder/list", // 应用购买--订单列表-软 qfy/entpOrder/softList
  w0062: "/qfy/entpOrder/cancel", // 应用购买--订单取消
  w0063: "/qfy/contP/list", // 纸质合同列表
  w0064: "/qfy/contP/apply", // 申请纸质合同
  w0065: "/qfy/contP/detail", // 纸质合同详情
  w0066: "/qfy/entpOrder/appAcctList", // 续费选择帐号列表
};

for (let [key, value] of Object.entries(apiUrl)) {
  $axios[key] = (params) => {
    return axios.post(value, params);
  };
}

export default $axios;
