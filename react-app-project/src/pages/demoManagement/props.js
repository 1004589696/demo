import React, { Component } from 'react';
import PropsChild from './props-child';
import './index.scss';

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "我是父组件的默认值"
        };
    }

    render() {
        return (
            <div>
                <div className="page-title">props 传值</div>
                <div className="page-content">
                    <p>我是父组件：</p>
                    <p className="paragraph">str：{this.state.str}
                        <button onClick={this.changeStr}>改变我的str</button>
                    </p>
                    <PropsChild str={this.state.str} changeFatherStr={this.changeFatherStr} />
                </div>
            </div>
        )
    }


    changeStr = () => {
        this.setState({
            str: "我是父组件改变的"
        })
    }

    changeFatherStr = (str) => {
        this.setState({
            str
        })
    }


}