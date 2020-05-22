// 手机号验证
export function checkPhone(rule, value, callback) {
  let reg = /^1[3456789]\d{9}$/;
  if (value && (!reg.test(value) || value.length !== 11)) {
    return Promise.reject("手机号码格式错误");
  }
  return Promise.resolve();
}

// 邮箱验证
export function checkMail(rule, value, callback) {
  let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (value && !reg.test(value)) {
    return Promise.reject("邮箱格式错误");
  }
  return Promise.resolve();
}

// 密码格式验证
export function checkPassword(rule, value, callback) {
  let reg = /(?!^[0-9]+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,14}$/;
  if (value && !reg.test(value)) {
    return Promise.reject("密码格式错误");
  }
  return Promise.resolve();
}

// 企业名称验证
export function checkCompanyName(rule, value, callback) {
  let reg = /^[\w\-.（）—\u4E00-\u9FA5]{2,50}$/;
  if (value && !reg.test(value)) {
    return Promise.reject("名称格式错误");
  }
  return Promise.resolve();
}

// 企业注册码
export function checkIosCode(rule, value, callback) {
  let reg = /(^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$)|(^\d{15}$)/g;
  if (value && !reg.test(value)) {
    return Promise.reject("格式错误");
  }
  return Promise.resolve();
}

// 注册帐号验证
export function checkAccount(rule, value, callback) {
  let reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,32}$/;
  if (value && !reg.test(value)) {
    return Promise.reject("格式错误");
  }
  return Promise.resolve();
}

// 身份证验证
export function checkCardId(rule, value, callback) {
  let reg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (value && !reg.test(value)) {
    return Promise.reject("格式错误");
  }
  return Promise.resolve();
}

// 验证地址
export function checkAddress(rule, value, callback) {
  if (value && value.length !== 3) {
    return Promise.reject("请选择");
  }
  return Promise.resolve();
}

let validateFuns = {
  checkPhone,
  checkMail,
  checkPassword,
  checkCompanyName,
  checkAccount,
  checkCardId,
  checkAddress,
  checkIosCode,
};

export default validateFuns;
