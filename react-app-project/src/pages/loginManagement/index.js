import React, { Component } from "react";
import "./index.scss";
import logo from "@/assets/images/logo.png";
import { Row, Col, Input, Form, Button } from "antd";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeUrl: "",
      isNeedCode: false,
    };
  }

  componentDidMount() {
    this.getCodeImgUrl();
  }

  render() {
    return (
      <div className="login-page">
        <div>
          <img className="company-icon" src={logo} alt="pic" />
          <Form onFinish={this.onFinish}>
            <Form.Item
              name="account"
              rules={[{ required: true, message: "请输入帐号" }]}
            >
              <Input size="large" addonBefore="帐号:" maxLength={32} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                type="password"
                maxLength={14}
                size="large"
                addonBefore="密码:"
              />
            </Form.Item>
            {this.state.isNeedCode ? (
              <Form.Item
                name="verifyCode"
                rules={[{ required: true, message: "请输入验证码" }]}
              >
                <Row>
                  <Col span={16}>
                    <Input
                      size="large"
                      addonBefore="图形验证码:"
                      maxLength={6}
                    />
                  </Col>
                  <Col span={8}>
                    <img
                      className="code-img"
                      src={this.state.codeUrl}
                      onClick={this.getCodeImgUrl}
                      alt="pic"
                    />
                  </Col>
                </Row>
              </Form.Item>
            ) : null}
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }

  getCodeImgUrl = () => {
    React.$axios.G0001().then((res) => {
      const codeUrl =
        "data:image/png;base64," +
        btoa(
          new Uint8Array(res).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
      this.setState({
        codeUrl,
      });
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
    let reqData = {
      account: values.account,
      password: values.password,
    };
    this.state.isNeedCode && (reqData.verifyCode = values.verifyCode);
    React.$axios
      .Q0001(reqData)
      .then((res) => {
        this.props.history.replace("/index");
      })
      .catch((res) => {
        if (
          res.data.code === "00060" &&
          res.data.data &&
          res.data.data.isNeedVerifyCode
        ) {
          this.setState({
            isNeedCode: true,
          });
          this.getCodeImgUrl();
        }
      });
  };
}
