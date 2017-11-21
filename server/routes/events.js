module.exports = services => {
  const router = new require('express').Router
  const { pg: { events } } = require('../controllers/')(services)

  return router
    .route('/')
      .get(events.get)
    .route('/:userId')
      .get(events.getByCreatorId)
      .put(events.update)
}
