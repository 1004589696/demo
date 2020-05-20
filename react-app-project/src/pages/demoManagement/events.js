import React, { Component } from 'react';
import EventsChild from './events-child';
import './index.scss';
import PPEmitter from '@/utils/events';

export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str: "我是父组件的默认值"
        };
    }

    componentDidMount() {
        // 声明自定义事件
        PPEmitter.emit('changeStr', "我是父组件的默认值");
    }

    render() {
        return (
            <div>
                <div className="page-title">events 传值</div>
                <div className="page-content">
                    <p>我是父组件：</p>
                    <p className="paragraph">str：{this.state.str}
                        <button onClick={this.changeStr}>改变我的str</button>
                    </p>
                    <EventsChild />
                </div>
            </div>
        )
    }


    changeStr = () => {
        this.setState({
            str: "我是父组件改变的"
        })
        PPEmitter.emit('changeStr', "我是父组件改变的");
    }

}