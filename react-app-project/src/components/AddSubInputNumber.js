import React, { Component } from 'react';
import './AddSubInputNumber.scss';
import { InputNumber, Button } from 'antd';

class AddSubInputNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <span className="addSub">
                <Button>-</Button>
                <InputNumber min={1} max={10} defaultValue={1} />
                <Button>+</Button>
            </span>
        )
    }
}

export default AddSubInputNumber;