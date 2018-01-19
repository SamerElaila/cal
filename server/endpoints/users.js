const express = require('express')

const { users } = require('../controllers/')

const userEndpoint = new express.Router({ mergeParams: true })

userEndpoint.get('/user-info', users.getInfo)

module.exports = userEndpoint
