const express = require('express')

const { userEvents } = require('../controllers/')

const router = new express.Router({ mergeParams: true })

router
  .route('/')
  .get(userEvents.getAll)
  .post(userEvents.create)

router
  .route('/:eventId')
  .get(userEvents.get)
  .put(userEvents.update)

module.exports = router
