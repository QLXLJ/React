import React from 'react'//创建组件、虚拟DOM元素，生命周期
//创建组件：第一种方式
//创建并导入
    export default  function Hello(props){//用props来传递数据的方式
    // console.log(props)
    return  <div>这是Hello组件----{props.name}===={props.age}===={props.gender}</div>
    // return  <div>这是Hello组件----'名字:'+props.name+'===='+'年龄:'+props.age+'===='+'性别:'+props.gender</div>
}
// export default Hello