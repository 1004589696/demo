import React, { Component } from 'react';
import './index.scss';
import { Tabs, Input, Form, Button } from 'antd';
import DefaultForm from '../../components/DefaultForm';
const { TabPane } = Tabs;


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    render() {
        const fieldlist = [
            {
                type: "isInput",
                label: "用户名",
                name: "username",
                initialValue: "",
                placeholder: "请输入用户名",
                rules: [
                    { required: true, message: "请输入用户名" }
                ]
            },
            {
                type: "isInput",
                label: "密码",
                name: "password",
                initialValue: "",
                placeholder: "请输入用户名",
                rules: [
                    { required: true, message: "请输入用户名" }
                ],
                width: '200px',
            },
            {
                type: "isCustom",
                label: "性别",
                name: "gender",
                initialValue: "",
                rules: [
                    { required: true, message: "请输入用户名" }
                ],
                el: <Input />,
            },
            {
                type: "isCustom",
                label: "BirthDate",
                name: "year",
                rules: [
                    { required: true, message: "请输入用户名" }
                ],
                el: <div>
                    <Form.Item
                        name="year"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                    >
                        <Input placeholder="Input birth year" />
                    </Form.Item>
                    <Form.Item
                        name="month"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                    >
                        <Input placeholder="Input birth month" />
                    </Form.Item>
                </div>
            }
        ];
        return (
            <div>
                <Tabs className="login-page-tabs" defaultActiveKey="1">
                    <TabPane tab="员工账号登录" key="1"></TabPane>
                    <TabPane tab="企业账号登录" key="2"></TabPane>
                </Tabs>
                <DefaultForm fieldlist={fieldlist} onFinish={this.onFinish}>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </DefaultForm>
            </div>
        )
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
    }

}