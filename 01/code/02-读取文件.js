// 浏览器中的 JavaScript 是没有文件操作能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

const { readFile } = require('fs')

// fs 是 file-system 的简写，就是文件系统的意思
// 在Node中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的 API
// 例如：fs.readFile 就是用来读取文件的

// 1.使用request 方法加载 fs 核心模块
fs = require('fs')

// 2.读取文件
  // 第一个参数就是要读取的文件路径
  // 第二个参数就是一个回调函数
  //     成功
  //       data 数据
  //       error null
  //     失败
  //       data undefined没有数据
  //       error null
readFile('./data/a.txt', function (error, data) {
  // console.log(data.toString())
  // <Buffer 68 65 6c 6c 6f 77 20 72 65 61 64 46 69 6c 65>
  // 文件中存储的其实都是二进制数据 0 1
  // 这里为什么看到的不是 0 和 1 呢？原因是二进制转为 16进制了
  // 但是无论是二进制01还是16进制，人类都不认识
  // 所有我们可以通过 toString 方法把其转为我们能认识的字符
  // console.log(data)
  // <Buffer 68 65 6c 6c 6f 77 20 72 65 61 64 46 69 6c 65>
  // console.log(error)
  // console.log(data)

  // 在这里就可以通过判断 error 来确认是否有错误发生
  if (error) {
    console.log('读取文件失败了')
  } else {
    console.log(data.toString())
  }
});