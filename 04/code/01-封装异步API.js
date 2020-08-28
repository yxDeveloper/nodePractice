// function fn(callback) {
//   // var callback = function (data) { console.log(data) }

//   // setTimeout(function () {
//   //   var data = 'hello'
//   //   return data
//   // }, 1000)

//   // var data = '默认数据'
//   // setTimeout(function () {
//   //   data = 'hello'
//   // }, 1000)
//   // return data

//   setTimeout(function () {
//     var data = 'hello'
//     callback(data)
//   }, 1000)
// }

// // 调用 fn ，得到内部的 data
// // console.log(fn())

// // 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
// fn(function (data) {
//   console.log(data)
// })


function fn(callback) {
  // var callback = function (data) { console.log(data) }

  setTimeout(function () {
    var data = 'hello'
    callback(data)
  }, 1000)
}

// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
fn(function (data) {
  console.log(data)
})

// $.get('dsadsadsa?foo=bar', function (data) {
// })

// $.ajax({
//   url: 'dsadsa',
//   type: 'get',
//   data: {
//     foo: 'bar'
//   },
//   // 使用者只负责传递，封装这需要去调用
//   success: function () {
    
//   }
// })

// function ajax(options) {
//   options.success(data)
// }
