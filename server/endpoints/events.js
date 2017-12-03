const express = require('express')

const { events } = require('../controllers/')

const router = new express.Router()

router
  .route('/')
    .get(events.get)

router
  .route('/:userId')
    .get(events.getByCreatorId)
    .put(events.update)

module.exports = router
