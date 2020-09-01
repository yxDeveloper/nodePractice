var fs = require('fs')
var path = require('path')

// 一般在开发命令行工具的时候，这个设计是必须有用的一个特性
//  npm
//  webpack
// __dirname 和 __filename 这俩哥们儿就是专门用来动态的获取当前文件以及文件所属目录的绝对路径
fs.readFile(path.join(__dirname, './00-文件路径.js'), function (err, data) {
  if (err) {
    throw err
  }
  console.log(data.toString())
})
