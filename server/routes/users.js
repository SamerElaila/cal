
module.exports = services => {
  const router = new require('express').Router
  const { users } = require('../controllers/')(services)

  return router
    .route('/')
      .post(users.create)
    .route('/:userId')
      .get(users.getById)
      .put(users.update)
}
