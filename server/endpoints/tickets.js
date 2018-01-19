const express = require('express')

const { tickets } = require('../controllers/')

const router = new express.Router({ mergeParams: true })

router.route('/').get(tickets.getAll)

router.route('/buy').post(tickets.buy)

router.route('/:ticketId/QR').get(tickets.generateQRCode)

module.exports = router
