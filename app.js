var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var admin = require('./admin')

app.set('view engine', 'jade')
app.set('views', './views')
app.use('/admin', admin)
app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('index', { title: 'Home' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
