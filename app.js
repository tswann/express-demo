var express = require("express");
var rooms = require('./data/rooms.json');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
  res.render('index', { title: "Home"});
});

app.get('/admin/rooms', function(req, res) {
    res.render('rooms', { title: "Admin Rooms", rooms: rooms });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});