const express = require('express')

const { userEvents } = require('../controllers/')

const router = new express.Router({ mergeParams: true })

router
  .route('/')
    .get((req, res, next) => {
      console.log('in correct route!', req.url);
      console.log(req.params);

      userEvents.getAll(req, res, next)
    })
    .post(userEvents.create)

router
  .route('/:eventId')
    .get(userEvents.get)
    .put(userEvents.update)

module.exports = router
