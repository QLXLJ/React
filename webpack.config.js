var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
//创建一个插件实例对象
var htmlplugin = new HtmlWebpackPlugin({
    template : path.join(__dirname,'./src/index.html'),//源文件url地址路径
    filename:'index.html'//生成内存中首页的名称
})

//向外暴露一个打包对象， 因为webpack是基于node构建的，所以webpack支持所有的node API语法
//webpack 默认只能打包.js后缀名的文件，像.vue .png等文件无法打包，需要第三方的loader
module.exports={
    mode: 'development',
    plugins:[
        htmlplugin
    ],
    module:{//第三模块的处理规则
        rules: [ // 大家可以在 css-loader 之后，通过 ? 追加参数，
            // 其中，有个固定的参数，叫做 modules , 表示为 普通的 CSS 样式表，启用模块化
           { test : /\.js|jsx$/,use:'babel-loader',exclude:/node_modules/}, //千万别忘记exclude，否则项目跑不起来
           { test : /\.css$/,use:['style-loader','css-loader']},
           { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] } // 打包处理 scss 文件的 loader
            
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],//如果这几种文件的后缀名省略不写的话，默认会自动补全
        alias:{//表示别名
            '@': path.join(__dirname,'./src')//这样一拼接，就相当@就是这一层的项目根目录
        }
    }
    //在webpack4.xx版本，有这么一个特性，就是约定大于设置，约定入口函数在./src下的index.js,
    //即默认打包入口函数路径为->./src->index.js
// 行不行 ？  目前不行； // 这是 ES6 中 向外导出模块的API 与之对应的 是  import ** from '标识符'
// export default {}
// 那些 特性 Node 支持呢？  如果 chrome 浏览器支持哪些，则 Node 就支持哪些；

}