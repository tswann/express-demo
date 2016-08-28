var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var admin = require('./admin')
var api = require('./api')

app.set('view engine', 'jade')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'))
app.use(express.static('node_modules/jquery/dist'))
app.use('/admin', admin)
app.use('/api', api)

app.get('/', function (req, res) {
  res.render('home', { title: 'Home' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
