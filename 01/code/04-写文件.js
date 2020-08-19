let fs = require('fs')

// $.ajax({
  // ...
  // success: function (data) {

  // }
// })

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
// error

// 成功：
  // 文件写入成功
  // error是null
// 失败：
  // 文件写入失败
  // error就是错误对象

fs.writeFile('./data/你好.md','大家好，给大家介绍一下，我是node.js',function (error) {
  // console.log('文件写入成功‘)
  // console.log(error)
  if (error) {
    console.log('写入失败')
  } else {
    console.log('写入成功')
  }
})

fs.readFile('./data/你好.md',function (error,data) {
  if (error) {
    throw error
  } else {
    console.log(data.toString())
  }
})