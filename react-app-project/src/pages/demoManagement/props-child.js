import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class PropsChild extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>我是子组件：</p>
                <p className="paragraph">str：{this.props.str}
                    <button onClick={this.changeStr}>改变父组件传过来的str</button>
                </p>
                <p className="demo-ps">可以用propTypes来验证父组件传过来的值得类型</p>
                <p className="demo-ps-content">
                    // defaultProps：不传时设置默认值，

                    // propTypes：验证值的类型
                </p>
            </div>
        )
    }

    changeStr = () => {
        this.props.changeFatherStr("我是子组件触发改变的")
    }

}

// defaultProps
PropsChild.defaultProps = {
    str: '默认父组件传来的值'
}

// PropTypes
PropsChild.propTypes = {
    str: propTypes.string
}