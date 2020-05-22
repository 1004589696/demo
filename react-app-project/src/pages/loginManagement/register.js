import React, { useState, useEffect } from "react";
import "./index.scss";
import logo from "@/assets/images/logo.png";
import {
  Row,
  Col,
  Input,
  Form,
  Button,
  Checkbox,
  Tooltip,
  message,
} from "antd";
import validateRules from "@/utils/validateRules.js";

const Register = (props) => {
  const [codeUrl, setCodeUrl] = useState("");
  const [form] = Form.useForm();
  const handleCheckRePwd = (rules, value, callback) => {
    let password = form.getFieldValue("password");
    if (password && password !== value) {
      return Promise.reject("两次输入的密码不一致");
    } else {
      return Promise.resolve();
    }
  };

  const getCodeImgUrl = () => {
    React.$axios.G0001().then((res) => {
      setCodeUrl(
        "data:image/png;base64," +
          btoa(
            new Uint8Array(res).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )
      );
    });
  };

  const onFinish = (values) => {
    if (!values.agreement) {
      return message.info("请先阅读条款声明");
    }
    React.$axios
      .Q0002({
        entpAcct: values.entpAcct,
        password: values.password,
        entpPhone: values.entpPhone,
        entpMail: values.entpMail,
        validateCode: values.validateCode,
      })
      .then((res) => {
        props.history.replace("/index");
      });
  };

  const getValidateCode = () => {
    form.validateFields(["verifyCode", "entpPhone"]).then((values) => {
      React.$axios
        .Q0003({
          entpPhone: values.entpPhone,
          verifyCode: values.verifyCode,
        })
        .then((res) => {
          this.$message.success(res.desc);
        });
    });
  };

  useEffect(() => {
    getCodeImgUrl();
  }, []);

  return (
    <div className="register-page">
      <div>
        <img className="company-icon" src={logo} alt="pic" />

        <Form form={form} onFinish={onFinish}>
          <Tooltip
            placement="right"
            title={
              <p>
                长度为6-32个字符，支持中文、数字、英文，不允许有标点符号及空格，账号一旦设置成功无法修改
              </p>
            }
          >
            <Form.Item
              name="entpAcct"
              rules={[
                { required: true, message: "请输入帐号" },
                { validator: validateRules.checkAccount },
              ]}
            >
              <Input size="large" addonBefore="帐号:" maxLength={32} />
            </Form.Item>
          </Tooltip>

          <Tooltip
            placement="right"
            title={
              <div>
                <p>
                  1.长度为6-14个字符，支持数字、大小写字母、标点符号，不允许有空格。
                </p>
                <p>2.数字、字母、标点符号至少包含两种。</p>
              </div>
            }
          >
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "请输入密码" },
                { validator: validateRules.checkPassword },
              ]}
            >
              <Input
                type="password"
                size="large"
                maxLength={14}
                addonBefore="密码:"
              />
            </Form.Item>
          </Tooltip>

          <Form.Item
            name="password2"
            rules={[
              { required: true, message: "请确认密码" },
              { validator: handleCheckRePwd },
            ]}
          >
            <Input
              type="password"
              size="large"
              maxLength={14}
              addonBefore="确认密码："
            />
          </Form.Item>

          <Form.Item
            name="entpPhone"
            rules={[
              { required: true, message: "输入手机号" },
              { validator: validateRules.checkPhone },
            ]}
          >
            <Input size="large" maxLength={11} addonBefore="手机:" />
          </Form.Item>

          <Form.Item
            name="entpMail"
            rules={[
              { required: true, message: "输入邮箱号" },
              { validator: validateRules.checkMail },
            ]}
          >
            <Input size="large" addonBefore="邮箱:" />
          </Form.Item>

          <Form.Item
            name="verifyCode"
            rules={[{ required: true, message: "请输入图形验证码" }]}
          >
            <Row>
              <Col span={16}>
                <Input size="large" addonBefore="图形验证码:" maxLength={6} />
              </Col>
              <Col span={8}>
                <img
                  className="code-img"
                  src={codeUrl}
                  onClick={getCodeImgUrl}
                  alt="pic"
                />
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="validateCode"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Row>
              <Col span={16}>
                <Input size="large" addonBefore="手机验证码:" maxLength={6} />
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  type="primary"
                  block
                  ghost
                  onClick={getValidateCode}
                >
                  获取验证码
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            valuePropName="checked"
            name="agreement"
            rules={[{ required: true, message: "先阅读条款" }]}
          >
            <Checkbox>
              我已同意
              <Button className="oprete" type="link" htmlType="button">
                《企蜂云服务条款》
              </Button>
              和
              <Button className="oprete" type="link" htmlType="button">
                《企蜂云隐私声明》
              </Button>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit" block>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
