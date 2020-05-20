import React, { Component } from 'react';
import { Form, Input } from 'antd';

export class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form.Item
                label="账户名"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                {this.props.children}
            </Form.Item>
        )
    }
}


export const getFormItem = val => {
    const {
        type = "isInput",
        label = null,
        name,
        initialValue = null,
        placeholder = null,
        colon = false,
        rules = [],
        width = null,
        el = null
    } = val;
    const strategy = {
        isCustom: () => el,
        isInput: () => <Input style={{ width: width }} placeholder={placeholder} />,
    };
    return (
        <Form.Item
            key={name || label}
            label={label}
            name={name}
            initialValue={initialValue}
            rules={rules}
            colon={colon}
        >
            {strategy[type]()}
        </Form.Item>
    )
};

class DefultForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const fieldlist = this.props.fieldlist;
        return (
            <Form {...this.props} labelCol={{ span: 2 }} wrapperCol={{ span: 16 }}>
                {
                    fieldlist.map(val => {
                        return getFormItem(val)
                    })
                }
                {this.props.children}
            </Form>
        )
    }
}

export default DefultForm;