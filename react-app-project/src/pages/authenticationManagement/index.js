import React, { useState, useEffect } from "react";
import "./index.scss";
import validateRules from "@/utils/validateRules.js";
import auth01 from "@/assets/images/auth01.png";
import {
  Row,
  Col,
  Steps,
  Divider,
  Form,
  Radio,
  Input,
  Cascader,
  Upload,
  Button,
  Checkbox,
  Tooltip,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Step } = Steps;

const Register = (props) => {
  // console.log(props);
  const [entpTypeList, setEntpTypeList] = useState([]);
  const [certTypeList, setCertTypeList] = useState([]);
  const [entpNameEdit, setEntpNameEdit] = useState(true);
  const [residences, setResidences] = useState([]);
  const [imgList, setImgList] = useState({
    license: [],
  });
  const [loadingImg, setLoadingImg] = useState(false);
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  };
  const getInitRegion = () => {
    React.$axios.Q0006({ regionId: "" }).then((res) => {
      let arr = [];
      for (let [key, value] of Object.entries(res.data)) {
        arr.push({
          value: key,
          label: value,
          isLeaf: false,
          level: 1,
        });
      }
      setResidences(arr);
    });
  };
  const regionLoadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    React.$axios.Q0006({ regionId: targetOption.value }).then((res) => {
      let arr = [];
      for (let [key, value] of Object.entries(res.data)) {
        let obj = {
          value: key,
          label: value,
          isLeaf: false,
          level: targetOption.level + 1,
        };
        if (targetOption.level === 2) {
          delete obj.isLeaf;
        }
        arr.push(obj);
      }
      targetOption.children = arr;
      targetOption.loading = false;
      setResidences(JSON.parse(JSON.stringify(residences)));
    });
  };

  const beforeUpload = (file) => {
    setLoadingImg(true);
    let arr = [
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "image/png",
      "image/bmp",
    ];
    if (arr.indexOf(file.type) === -1) {
      message.error("照片支持.jpg .jpeg .bmp .gif .png格式");
      setLoadingImg(false);
      return false;
    }
    if (file.size / 1024 / 1024 > 5) {
      message.error("图片大小不超过5M");
      setLoadingImg(false);
      return false;
    }
    return true;
  };

  const handleChange = (type, { file, fileList }) => {
    let obj = {
      ...imgList,
    };
    obj[type] = fileList;
    setImgList(obj);
    if (file.status === "error") {
      setLoadingImg(false);
    }
    if (file.status === "done") {
      setLoadingImg(false);
      obj[type] = [file];
      obj[type][0].fileId = file.response.data.fileId;
      obj[type][0].url = file.response.data.fileSmUrl;
      setImgList(obj);
    } else {
      obj[type] = [];
      setImgList(obj);
    }
    let values = {};
    values[type] = obj[type][0];
    form.setFieldsValue(values);
  };

  const onFinish = (values) => {};

  useEffect(() => {
    React.$axios.Q0005({ types: ["certType", "entpType"] }).then((res) => {
      setEntpTypeList(res.data.entpType);
      setCertTypeList(res.data.certType);
    });
    getInitRegion();
  }, []);

  return (
    <div>
      <div className="page-title">企业认证</div>
      <div className="authentication-page">
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Steps className="step-box" current={0} labelPlacement="vertical">
              <Step title="企业信息" />
              <Step title="企业法人/代办人信息" />
              <Step title="确定信息" />
            </Steps>
          </Col>
          <Col span={2}></Col>
        </Row>

        <div>
          <div className="block-title">
            <div className="block-title-txt">企业信息</div>
            <Divider />
          </div>
          <Row>
            <Col span={15}>
              <Form {...layout} name="basic" form={form} onFinish={onFinish}>
                <Form.Item
                  label="认证方式"
                  name="entpType"
                  rules={[{ required: true, message: "请选择认证方式" }]}
                >
                  <Radio.Group>
                    {entpTypeList.map((element) => (
                      <Radio key={element.code} value={element.code}>
                        {element.desc}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="证件类型"
                  name="certType"
                  rules={[{ required: true, message: "请选择证件类型" }]}
                >
                  <Radio.Group>
                    {certTypeList.map((element) => (
                      <Radio key={element.code} value={element.code}>
                        {element.desc}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="企业名称"
                  name="entpName"
                  rules={[
                    { required: true, message: "请输入企业名称" },
                    { validator: validateRules.checkCompanyName },
                  ]}
                >
                  <Input maxLength={128} disabled={!entpNameEdit} />
                </Form.Item>
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, currentValues) =>
                    prevValues.certType !== currentValues.certType
                  }
                >
                  {({ getFieldValue }) => {
                    return getFieldValue("certType") === "2" ? (
                      <Form.Item
                        label="注册码"
                        name="certNo"
                        rules={[
                          { required: true, message: "请输入注册码" },
                          { validator: validateRules.checkIosCode },
                        ]}
                      >
                        <Input maxLength={30} />
                      </Form.Item>
                    ) : (
                      <Form.Item
                        label="统一社会信用代码"
                        name="certNo"
                        rules={[
                          { required: true, message: "请输入统一社会信用代码" },
                          { validator: validateRules.checkIosCode },
                        ]}
                      >
                        <Input maxLength={30} />
                      </Form.Item>
                    );
                  }}
                </Form.Item>

                <Form.Item
                  label="注册地址"
                  name="region"
                  rules={[
                    { type: "array", required: true, message: "请选择地址" },
                    { validator: validateRules.checkAddress },
                  ]}
                >
                  <Cascader options={residences} loadData={regionLoadData} />
                </Form.Item>
                <Form.Item
                  label="详细地址"
                  name="address"
                  rules={[{ required: true, message: "请输入详细地址" }]}
                >
                  <Input maxLength={100} />
                </Form.Item>

                <Form.Item
                  required={true}
                  label="营业执照"
                  extra={
                    <p>照片支持.jpg .jpeg .bmp .gif .png格式，大小不超过5M</p>
                  }
                >
                  <Form.Item noStyle>
                    <Upload
                      fileList={[
                        {
                          uid: "-1",
                          name: "image.png",
                          status: "done",
                          url: auth01,
                        },
                      ]}
                      showUploadList={{ showRemoveIcon: false }}
                      listType="picture-card"
                    ></Upload>
                  </Form.Item>
                  <Form.Item
                    noStyle
                    name="license"
                    rules={[{ required: true, message: "请上传营业执照" }]}
                  >
                    <Upload
                      fileList={imgList.license}
                      listType="picture-card"
                      action="/qfy/fileUpload"
                      data={{ isShowSmall: "Y" }}
                      beforeUpload={beforeUpload}
                      onChange={handleChange.bind(this, "license")}
                    >
                      {imgList.license && imgList.license.length === 0 ? (
                        <div>
                          <PlusOutlined />
                          <div>上传</div>
                        </div>
                      ) : null}
                    </Upload>
                  </Form.Item>
                </Form.Item>

                {/* <Form.Item
                  label="营业执照"
                  name={["licenseHold", "license"]}
                  rules={[{ required: true, message: "请输入详细地址" }]}
                  extra={
                    <div>
                      <p>上传：营业执照图片</p>
                      <p>
                        照片所有信息需清晰可见，内容真实有效，不得做任何修改
                      </p>
                      <p>照片支持.jpg .jpeg .bmp .gif .png格式，大小不超过5M</p>
                    </div>
                  }
                >
                  <Upload
                    listType="picture-card"
                    showUploadList={{ showRemoveIcon: false }}
                  ></Upload>
                  <Upload
                    listType="picture-card"
                    action="/qfy/fileUpload"
                    data={{ isShowSmall: "Y" }}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  ></Upload>
                </Form.Item> */}

                <Form.Item wrapperCol={{ span: 15, offset: 5 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Register;
