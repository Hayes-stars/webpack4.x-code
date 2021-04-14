// webpack的默认配置 0配置
// webpack是基于node的构建工具
// 自定义webpack配置文件演示
const path = require('path')

module.exports = {
  // 入口
  entry: "./src/indexx.js",
  // 出口
  output: {
    // 打包后的代码存放目录，必须是绝对路径
    path: path.resolve(__dirname, "./demo"),
    // 打包后的文件命名
    filename: "index.js"
  }
}