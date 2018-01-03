const express = require('express')

const { tickets } = require('../controllers/')

const router = new express.Router({ mergeParams: true })

router
  .route('/buy')
    .post(tickets.buy)

module.exports = router
