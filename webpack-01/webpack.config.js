// webpack的默认配置 0配置
// webpack是基于node的构建工具
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 什么是单入口应用spa 单页面应用  一个html
// 什么是多入口应用 mpa 多页面应用  多个html
// pc端项目 seo搜索引擎优化  sem搜索引擎营销
module.exports = {
  // 入口 string arr obj
  entry: './src/index.js', // 字符串写法 等同于 对象写法
  // 多入口一定要对应多出口
  // chunk: 代码片段
  // entry: {
  //   // 对象写法
  //   // chunks: 健值【index, list】
  //   index: './src/index.js', // 两个模块（chunk）index和a
  //   list: './src/list.js', //
  // },
  // 出口
  output: {
    // 打包后的代码存放目录，必须是绝对路径
    path: path.resolve(__dirname, './dist'),
    // 打包后的文件命名
    // filename: 'main.js'
    filename: '[name].js', // 占位符，单入口，多入口都可使用，由于入口格式最后会转换成对象，默认key是main
    // 占位符语法 [name]
    // [id] 模块id
    // 占位符 指纹策略写法 [hash] [chunkhash] [contenthash]
  },
  // 打包模式配置：none, development, production
  // development 开发模式，注重开发体验，输出信息比较多，代码不会被压缩
  // production 生产模式
  // none 不开启任何开发模式 默认为 production
  mode: 'development',
  // loader 模块解析器 先安装 后配置
  // webpack 默认只支持js文件  json文件
  // 其他 .vue .jpg .css .sass .ts 则使用对应的loader
  module: {
    rules: [
      {
        test: /\.css$/, // 指定匹配规则
        // use: {
        //   loader: 'css-loader', // 指定使⽤的loader
        // },
        // 多个loader作用于一个模块，需要用数组
        // 多个loader作用于一个模块，需要注意顺序，是自后往前
        // webpack自定义loader规范，一个loader最好只做一件事情
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.jpg$/,
      //   use: ''
      // },
      // {
      //   test: /\.vue$/,
      //   use: ''
      // }
    ],
  },
  // plugin 插件  先安装 后配置
  // webpack的功能扩展
  // 对输出目录起作用的
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html', // 初始模板 如果不指定初始化，则会有一个默认的index.html
      title: 'My App',
      filename: 'app.html',
    }),
  ],
  // 编译过程用loader，打包过程拓展用plugin
}
