import React, { Component } from 'react';/*

1、react 中阻止默认行为 要用e.preventDefault();     return false;没有用

===========

2、 
  resolve:{
    alias:{
      '@':path.join(__dirname,'./src') //这样，@ 就表示 项目根目录中的src 这一层路径
    }
  }

===========

3、extends继承： class App extends Component  扩展Component变成App

===========
  
4、Class的静态方法
  
  如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
  父类的静态方法，可以被子类继承。
  class Foo {
    static classMethod() {
      return 'hello';
    }
  }

===========

5、key的作用，干什么的
      
  用于追踪记录列表中的元素的添加 修改 删除，是一个辅助标识，减少元素的不必要的渲染

===========

6、react 中创建组件的方法

  1.函数创建 函数名就是组件名 首字母大写,函数组件中没有state，只是纯展示性组件  
  2.class类 render 函数中返回

===========

7、虚拟DOM

  用js对象去表示DOM树结构，这个js对象就是虚拟DOM；

  react中render执行的结果并不是得到Dom节点，而是得到js对象，称之为虚拟DOM;

  react 虚拟dom中的批处理和高效的diff算法

  通过diff算法，得到新旧虚拟DOM这两个对象的差异(Diff算法)，最终只把变化的部分重新渲染,提高渲染效率的过程

  


  浏览器渲染页面 一般是创建DOM数、创建css样式表、创建render树、布局、绘制页面，构建dom树和css样式表、render树不是完全独立的，一边解析一边渲染。
  操作真实的Dom时，会从构建DOM树开始从头到尾执行一遍流程，频繁操作还是会出现页面卡顿，影响用户体验。


===========

8、渲染劫持

  控制组件从另一个组件输出的能力，高阶组件可以在render函数中做非常多的操作，从而控制原组件的渲染输出，只要改变了原组件的渲染输出，我们都称之为 渲染劫持
  可以新写一个组件，继承一个已有的组件，在这里就可以随意修改render函数，使用state、props这些状态数据，改变了原组件的渲染，这就叫渲染劫持。

===========

9、redux 

  state 状态数据
  action 用户动作
  dispatch 分发动作
  reducer 分发动作到 reducer 改变state
  createStore 方法用于生成一个store对象, 这个函数接受一个初始值state值和一个reducer函数。当用户发出相应的action时，利用传入的reducer函数计算出一个新的state值，并返回。







*/
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  render() {
    var arr = [1, 2, 3];   //要传递的参数
    var c = "dd";
    return (
      <div ref="myDiv">
        {
          arr.map((v) => {
            var d;
            d = v;
            return c + d;
          })
        }
        hello world
      </div>
    )
  }
}