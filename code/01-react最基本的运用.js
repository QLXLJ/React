//入口函数
// console.log('ook')
//导入包,这两个必须这么写，
import React from 'react'//创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM放到页面上展示
//2、创建虚拟DOM元素
//参数1:创建元素的类型，字符串，表示元素的名称
//参数2:是一个对象或者null，表示当前的DOM元素属性
//参数3:子节点（包括其他虚拟DOM获取文本子节点）
//参数N:其他子节点

// const myh1 = React.createElement('h1',null,'这是一个虚拟DOM')
const myh1 = React.createElement('h1',{id:'myh1',title:'知识改变命运'},'这是一个虚拟DOM')
const mydiv = React.createElement('div',null,'这是一个元素',myh1)
//3、使用ReactDOM把虚拟DOM渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2:指定页面上的DOM元素，当做一个容器
ReactDOM.render(mydiv,document.getElementById("app"))
//第二个参数必须是一个DOM元素而不是一个选择器
