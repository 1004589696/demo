import React, { Component } from 'react';
import './index.scss';
import PPEmitter from '@/utils/events';

export default class EventsChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str:"我是子组件的值"
        };
    }

    componentDidMount() {
        // 声明自定义事件
        this.eventEmitter = PPEmitter.on('changeStr', (msg) => {
            this.setState({
                str: msg
            })
        })
    }

    render() {
        return (
            <div>
                <p>我是子组件：</p>
                <p className="paragraph">str：{this.state.str}</p>
                <p className="demo-ps">React.createContext：创建一个上下文的容器(组件)</p>
                <p className="demo-ps">Provider(生产者)：用于生产共享数据的地方。value:放置共享的数据</p>
                <p className="demo-ps">Consumer(消费者)：Consumer需要嵌套在生产者下面，用于拿到共享的数据源。也能消费到上文提到的defaultValue</p>
            </div>
        )
    }
}