import React, { Component } from 'react';
import { Consumer } from '@/utils/context';
import './index.scss';

export default class ContextChild extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>我是子组件：</p>
                <Consumer>
                    {
                        (res) => {
                            return (
                                <p className="paragraph">str：{res.str}</p>
                            )
                        }
                    }
                </Consumer>
                <p className="demo-ps">React.createContext：创建一个上下文的容器(组件)</p>
                <p className="demo-ps">Provider(生产者)：用于生产共享数据的地方。value:放置共享的数据</p>
                <p className="demo-ps">Consumer(消费者)：Consumer需要嵌套在生产者下面，用于拿到共享的数据源。也能消费到上文提到的defaultValue</p>
            </div>
        )
    }
}