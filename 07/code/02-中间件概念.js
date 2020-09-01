var http = require('http')
var url = require('url')

var cookie = require('./middlewares/cookie')
var postBody = require('./middlewares/post-body')
var query = require('./middlewares/query')
var session = require('./middlewares/session')

var server = http.createServer(function (req, res) {
  // 解析表单 get 请求体
  // 解析表单 post 请求体
  // 解析 Cookie
  // 处理 Session
  // 使用模板引擎
  // console.log(req.query)
  // console.log(req.body)
  // console.log(req.cookies)
  // console.log(req.session)

  // 解析请求地址中的 get 参数
  // var urlObj = url.parse(req.url, true)
  // req.query = urlObj.query
  query(req, res)

  // 解析请求地址中的 post 参数
  // req.body = {
  //   foo: 'bar'
  // }
  postBody(req, res)

  // 解析 Cookie
  // req.cookies = {
  //   isLogin: true
  // }
  cookie(req, res)

  // 配置 Session
  // req.session = {}
  session(req, res)

  // 配置模板引擎
  res.render = function () {
    
  }

  if (req.url === 'xxx') {
    // 处理
    // query、body、cookies、session、render API 成员
  } else if (url === 'xx') {
    // 处理
  }


  // 上面的过程都是了为了在后面做具体业务操作处理的时候更方便
})

server.listen(3000, function () {
  console.log('3000. running...')
})
