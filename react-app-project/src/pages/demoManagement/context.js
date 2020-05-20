import React, { Component } from 'react';
import { Provider } from '@/utils/context';
import ContextChild from './context-child';
import './index.scss';

export default class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "我是父组件的默认值"
        };
    }

    render() {
        return (
            <div>
                <div className="page-title">context 传值</div>
                <div className="page-content">
                    <p>我是父组件：</p>
                    <p className="paragraph">str：{this.state.str}
                        <button onClick={this.changeStr}>改变我的str</button>
                    </p>
                    <Provider value={{ str: this.state.str }}>
                        <ContextChild />
                    </Provider>
                </div>
            </div>
        )
    }

    changeStr = () => {
        this.setState({
            str: "我是父组件改变的"
        })
    }

}