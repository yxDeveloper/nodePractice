var express = require('express')

var app = express()

// 中间件：处理请求的，本质就是个函数

// 在 Express 中，对中间件有几种分类

// 当请求进来，会从第一个中间件开始进行匹配
//    如果匹配，则进来
//       如果请求进入中间件之后，没有调用 next 则代码会停在当前中间件
//       如果调用了 next 则继续向后找到第一个匹配的中间件
//    如果不匹配，则继续判断匹配下一个中间件
//    
// 不关心请求路径和请求方法的中间件
// 也就是说任何请求都会进入这个中间件
// 中间件本身是一个方法，该方法接收三个参数：
//    Request 请求对象
//    Response 响应对象
//    next     下一个中间件
// 当一个请求进入一个中间件之后，如果不调用 next 则会停留在当前中间件
// 所以 next 是一个方法，用来调用下一个中间件的
// 调用 next 方法也是要匹配的（不是调用紧挨着的那个）

// app.use(function (req, res, next) {
//   console.log('1')
//   next()
// })

// app.use(function (req, res, next) {
//   console.log('2')
//   next()
// })

// app.use(function (req, res, next) {
//   console.log('3')
//   res.send('333 end.')
// })

// app.use(function (req, res, next) {
//   console.log(1)
//   next()
// })


// app.use('/b', function (req, res, next) {
//   console.log('b')
// })

// // 以 /xxx 开头的路径中间件
// app.use('/a', function (req, res, next) {
//   console.log('a')
//   next()
// })

// app.use(function (req, res, next) {
//   console.log('2')
//   next()
// })

// app.use('/a', function (req, res, next) {
//   console.log('a 2')
// })

// 除了以上中间件之外，还有一种最常用的
// 严格匹配请求方法和请求路径的中间件
// app.get
// app.post

app.use(function (req, res, next) {
  console.log(1)
  next()
})

app.get('/abc', function (req, res, next) {
  console.log('abc')
  next()
})

app.get('/', function (req, res, next) {
  console.log('/')
  next()
})

app.use(function (req, res, next) {
  console.log('haha')
  next()
})

app.get('/abc', function (req, res, next) {
  console.log('abc 2')
})

app.use(function (req, res, next) {
  console.log(2)
  next()
})

app.get('/a', function (req, res, next) {
  console.log('/a')
})

app.get('/', function (req, res, next) {
  console.log('/ 2')
})

// 如果没有能匹配的中间件，则 Express 会默认输出：Cannot GET 路径

app.listen(3000, function () {
  console.log('app is running at port 3000.')
})


