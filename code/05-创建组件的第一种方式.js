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
// const myh1 = React.createElement('h1',{id:'myh1',title:'知识改变命运'},'这是一个虚拟DOM')
// const mydiv = React.createElement('div',null,'这是一个元素',myh1)
//注意：在js文件中，默认不能写这种类试于html标记；否则打包失败
//可以使用babel来转换这些js中的标签
//大家注意：这种在js中，混合写入类试于html的语法，叫做jsx语法；符合XML语法的规范的js
//注意： JSX语法的本质，还是在运行的时候，被转换成了React.createElement的形式来执行
const mydiv = <div id="mydiv" title="div aaa">
<h4>这是一个h4标签</h4>
这是一个div标签
</div>
const dog ={
    name:'大黄',
    age: 3,
    gender: '雄性'
}
//创建组件：第一种方式
function Hello(props){//用props来传递数据的方式
    console.log(props)
    // console.log('名字:'+props.name+'===='+'年龄:'+props.age+'===='+'性别:'+props.gender)
    // props.name = 'zs'
   
    return  <div>这是Hello组件----'名字:'+props.name+'===='+'年龄:'+props.age+'===='+'性别:'+props.gender</div>
    // return  <div>这是Hello组件----'名字:'+props.name+'===='+'年龄:'+props.age+'===='+'性别:'+props.gender</div>
}
//不管是vue还是react，组件中的props永远都是只读的，不能被重新赋值
ReactDOM.render(<div>
    123
    {/* //ES6的展开运算符 ...+数组名 */}
    {/* <Hello name = {dog.name} age={dog.age} gender={dog.gender}></Hello> */}
    <Hello {...dog}></Hello>
   {/* 直接把组件当做标签的形式丢到页面上即可 */}   
    </div>
,document.getElementById("app"))
//3、使用ReactDOM把虚拟DOM渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2:指定页面上的DOM元素，当做一个容器
// ReactDOM.render(mydiv,document.getElementById("app"))
//第二个参数必须是一个DOM元素而不是一个选择器
