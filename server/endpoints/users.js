const express = require('express')

const { users } = require('../controllers/')

const router = new express.Router()

router
  .route('/')
    .post(users.create)

router
  .route('/:userId')
    .get(users.getById)
    .put(users.update)

module.exports = router
