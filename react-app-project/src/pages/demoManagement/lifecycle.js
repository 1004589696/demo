import React, { Component } from 'react';

import './index.scss';


class Lifecycle extends Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            count: 1
        };
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount", this.state, this.props);
    }

    componentDidMount() {
        console.log("componentDidMount", this.state, this.props);
    }


    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate", this.state, this.props);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.state, this.props);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        console.log("UNSAFE_componentWillReceiveProps", this.state, this.props);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate", this.state, this.props);
        return true;
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.state, this.props);
    }

    render() {
        console.log("render", this.state, this.props)
        return (
            <div>
                <div className="page-title">生命周期</div>
                <div className="page-content">

                    <h4 className="demo-h4">1、static defaultProps={'{}'}</h4>
                    <p className="paragraph">如果父组件在调用子组件时，没有给子组件传值，子组件使用的就是defaultProps里定义的默认值</p>
                    <p className="paragraph">propTypes：用来验证父组件传值的类型</p>

                    <h4 className="demo-h4">2、执行 constructor 函数 super this.static</h4>

                    <h4 className="demo-h4">3、执行 componentWillMount/UNSAFE_componentWillMount</h4>
                    <p className="paragraph">16.x版本新增UNSAFE_componentWillMount，并给出警告将会弃用componentWillMount, 17.0版本后, 删除componentWillMount，保留使用UNSAFE_componentWillMount</p>
                    <p className="paragraph">这个函数调用时机是在，初始化了状态之后，在第一次绘制render()之前，整个生命周期中只被调用一次。</p>

                    <h4 className="demo-h4">4、执行 render</h4>
                    <h4 className="demo-h4">5、执行 componentDidMount 在第一次渲染后调用，整个生命周期中只被调用一次</h4>
                    <p className="paragraph">组件完成装载（已经插入 DOM 树）时，触发该方法。这个阶段已经获取到真实的 DOM，可以通过findDOMNode来进行访问，React@15.x 版本里被移除this.getDOMNode() </p>
                    <p className="paragraph">可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作</p>
                    <h4 className="demo-h4">6、执行 componentWillUpdate 组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用</h4>
                    <h4 className="demo-h4">7、执行 componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。</h4>
                    <h4 className="demo-h4">8、shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。。</h4>
                    <h4 className="demo-h4">9、执行 componentWillUnmount 在组件从 DOM 中移除之前立刻被调用。</h4>

                    <p className="demo-ps">一个汉字（汉字字符标点）的宽度等于设置的字体大小，英文字母的宽度不固定，数字的宽度比字体大小的一半大，英文字符比一半小</p>
                    <p className="demo-ps-content">
                        例如字体大小设置成14px：
                        <span>如</span>
                        <span>你</span>
                        <span>牛</span>
                        <span>果</span>
                        <span>b</span>
                        <span>y</span>
                        <span>w</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>8</span>
                        <span>/</span>
                        <span>;</span>
                        <span>,</span>
                        <span>!</span>
                        <span>！</span>
                        <span>，</span>
                        <span>。</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Lifecycle;