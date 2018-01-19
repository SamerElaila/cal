const express = require('express')

const { stripe } = require('../controllers/')

const router = new express.Router({ mergeParams: true })

router.post('/connect-callback', stripe.connectCallback)

module.exports = router
