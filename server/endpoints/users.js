const express = require('express')

const { users } = require('../controllers/')

const userEndpoint = new express.Router({ mergeParams: true })

userEndpoint
  .route('/')
    .post(users.create)

userEndpoint
  .route('/:userId')
    .get(users.getById)
    .put(users.update)

module.exports = userEndpoint
