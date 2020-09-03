var express = require('express')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
  res.render('index.html', {
    fruits: [
      '苹果',
      '香蕉',
      '橘子'
    ]
  })
})

app.listen(3000, function () {
  console.log('running 3000...')
})
