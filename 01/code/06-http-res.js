let http = require('http')

let server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
//  Requerst 请求对象
//    请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  Response 响应对象
//    响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response) {
  // http://127.0.0.1:3000/ /
  // http://127.0.0.1:3000/a /a
  // http://127.0.0.1:3000/foo/b /foo/b
  console.log('收到客户端的请求了，请求路径是：' + request.url)

//   response 对象有一个方法:write

})