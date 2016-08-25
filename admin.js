var rooms = require('./data/rooms.json')
var uuid = require('node-uuid')
var _ = require('lodash')
var express = require('express')
var router = express.Router()
module.exports = router

router.get('/admin/rooms', function (req, res) {
  res.render('rooms', { title: 'Admin Rooms', rooms: rooms })
})

router.get('/admin/rooms/add', function (req, res) {
  res.render('add')
})

router.post('/admin/rooms/add', function (req, res) {
  var room = {
    name: req.body.name,
    id: uuid.v4()
  }

  rooms.push(room)

  res.redirect('/admin/rooms')
})

router.get('/admin/rooms/delete/:id', function (req, res) {
  var roomId = req.params.id

  rooms = _.filter(rooms, r => r.id !== roomId)

  res.redirect('/admin/rooms')
})

router.get('/admin/rooms/edit/:id', function (req, res) {
  var roomId = req.params.id

  var room = _.find(rooms, r => r.id === roomId)
  if (!room) {
    res.sendStatus(404)
  }

  res.render('edit', { room })
})

router.post('/admin/rooms/edit/:id', function (req, res) {
  var roomId = req.params.id

  var room = _.find(rooms, r => r.id === roomId)
  if (!room) {
    res.sendStatus(404)
  }

  room.name = req.body.name

  res.redirect('/admin/rooms')
})
