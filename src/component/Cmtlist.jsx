// //定义父组件
// //React.Component注意这是大写
// import React from 'react'

// //导入评论子组件
// import Cmtitem from './Cmtitem'
//  export default class Cmtlist extends React.Component{
//     constructor(){
//         super()
//         this.state = {//评论列表数据
//          CommentList: [
//              { id: 1, user: '张三', content: '哈哈，沙发' },
//              { id: 2, user: '李四', content: '哈哈，板凳' },
//              { id: 3, user: '王五', content: '哈哈，凉席' },
//              { id: 4, user: '赵六', content: '哈哈，砖头' },
//              { id: 5, user: '田七', content: '哈哈，楼下山炮' }
//          ]
//         }
//     }
//     render() {
//         return <div>
//           <h4 style={{color: "blue",fontSize:'20px',fontWeight:100,paddingLeft:'40px',fontWeight:100}}>评论组件列表</h4>
//           {this.state.CommentList.map(item => <Cmtitem {...item} key={item.id}>   
//          </Cmtitem>)}
//          {/* 注意：在 JSX 中，如果想写 行内样式了，不能 为 style 设置 字符串的值 */}
//       {/* 而是应该 这么写：    style={ { color: 'red' } } */}
//       {/* <h1 style="color:red;">这是评论列表组件</h1> */}
//       {/* 在 行内样式中，如果 是 数值类型的样式，则可以不用引号包裹，如果是 字符串类型的 样式值，必须使用 引号包裹 */}
//          {/* //在jsx中，如若使用行内样式，不能为style设置字符串，而应该是用等号，用引号包括 */}
//           {/* {this.state.CommentList.map(item => <div key={item.id}>
//               <h4>评论人：{item.user}</h4>
//               <p>评论内容:{item.content}</p>
//           </div>)} */}
//            </div>}
//  }