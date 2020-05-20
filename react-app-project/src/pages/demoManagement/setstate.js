import React, { Component } from 'react';
import './index.scss';

export default class Setstate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="page-title">setState</div>
                <div className="page-content">

                    <p className="paragraph"><span onClick={this.changeState.bind(this)}>setState：count===>{this.state.count}</span></p>

                    <p className="paragraph">出于性能方面的考虑，React 可以将多次的 setState() 调用合并为一次，setState(nextState, callback)</p>
                    <p className="paragraph">因为 this.props 和 this.state 可能是异步更新的，你不应该用它们当前的值去计算下一个 state 的值</p>
                    <p className="paragraph">如果nextState参数是一个函数 return 出 state，每次更新时都会提取出当前的state，进行运算得到新的state，就保证了数据的同步更新。</p>
                    <p className="paragraph">第二个参数是回调函数，在setState调用完成并且重新渲染完的时候调用，可以用来监听渲染</p>

                    <h4 className="demo-h4">setState 之后发生了什么</h4>

                    <p className="paragraph">
                        setState 方法定义在 ReactBaseClasses.js里面，调用 setState 会调用 enqueueSetState 方法，将新的 state 放进 queue 数组里面，然后调用 enqueueUpdate 方法；
                </p>
                    <p className="paragraph">enqueueUpdate 方法里面，会去判断当前是否处于更新组件的过程中；如果是处于正在更新的过程中，会把当前组件放在dirtyComponent数组里；如果当前不在更新过程的话，则循环所有的dirtyComonent 执行更新。</p>


                    <p className="paragraph">在 componentWillMount 中执行 setState 是无意义的</p>

                    <p className="paragraph">原因是 componentWillMount 只执行一次，里面的 setState 会但是仅会更新 state 一次，而且会和 constructor 里的初始化 state 合并执行，因此这是无意义的</p>
                    <p className="paragraph">应该将这里的 setState 放到初始化 this.state 的地方去（如 constructor）直接作为 state 的初始值</p>


                    <p className="paragraph">在 componentWillUnmount 中执行 setState 不会更新 state，是不生效而且无意义的</p>

                    <p className="paragraph">禁止在 shouldComponentUpdate 和 componentWillUpdate  componentDidUpdate中调用 setState，这会造成循环调用，直至耗光浏览器内存后崩溃。</p>

                    <p className="paragraph">在 componentWillReceiveProps 中可以 setState，不会造成二次渲染。</p>

                </div>
            </div >
        )
    }


    changeState = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("hah");
        })

        this.setState((prevState, props) => {
            console.log(prevState, props);
            return {
                count: prevState.count + 1,
            };
        }, () => {
            console.log("hah2");
        });

        this.setState((prevState, props) => {
            console.log(prevState, props);
            return {
                count: prevState.count + 1,
            };
        });

        this.setState((prevState, props) => {
            console.log(prevState, props);
            return {
                count: prevState.count + 1,
            };
        });
    }



}