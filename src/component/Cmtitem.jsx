// import React from 'react'
// //注意props是react中的属性，必须导入
// //使用function函数定义无状态的组件
// //如果直接在行内元素中直接设置样式，这样容易造成代码紊乱
// //第一层封装
// // const divstyle ={border:"1px dashed #ccc",margin:'20px',paddingLeft:'20px',boxShadow:'0 0 6px'}
// // const h4style = {fontSize:'16px'}
// // const pstyle ={fontSize:'14px'}
// //第二层封装-----把样式放在一个对象中，通过点.其中的属性来引用
// // const liststyle = {
// //   item:{border:"1px dashed #ccc",margin:'20px',paddingLeft:'20px',boxShadow:'0 0 6px'},
// //   user:{fontSize:'16px'},
// //   content:{fontSize:'14px'}
// // }
// //第三层封装----把style样式单独放到js文夹里面,抽离为单独的样式表
// import liststyle from '@/component/js/Cmtitem'
// export default function Cmtitem(props){
//   return  <div style={liststyle.item}>
//          <h4 style={liststyle.user}>评论人：{props.user}</h4>
//        <p style={liststyle.content}>评论内容:{props.content}</p>
//   </div>
// }
//   // export default function Cmtitem(props){
//   //   return  <div style={divstyle}>
//   //          <h4 style={h4style}>评论人：{props.user}</h4>
//   //        <p style={pstyle}>评论内容:{props.content}</p>
//   //   </div>
     
//     // 
//   // }