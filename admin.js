var rooms = require('./data/rooms.json')
var uuid = require('node-uuid')
var _ = require('lodash')
var express = require('express')
var router = express.Router()
module.exports = router

router.get('/rooms', function (req, res) {
  res.render('rooms', { title: 'Admin Rooms', rooms: rooms })
})

router.get('/rooms/add', function (req, res) {
  res.render('add')
})

router.post('/rooms/add', function (req, res) {
  var room = {
    name: req.body.name,
    id: uuid.v4()
  }

  rooms.push(room)

  res.redirect('/rooms')
})

router.get('/rooms/delete/:id', function (req, res) {
  var roomId = req.params.id

  rooms = _.find(rooms, r => r.id !== roomId)

  res.redirect('rooms')
})

router.get('/rooms/edit/:id', function (req, res) {
  var roomId = req.params.id

  var room = _.find(rooms, r => r.id === roomId)
  if (!room) {
    res.sendStatus(404)
  }

  res.render('edit', { room })
})

router.post('/rooms/edit/:id', function (req, res) {
  var roomId = req.params.id

  var room = _.find(rooms, r => r.id === roomId)
  if (!room) {
    res.sendStatus(404)
  }

  room.name = req.body.name

  res.redirect('/rooms')
})
