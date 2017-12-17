const camel = require('../utils/camel.js')
const snake = require('../utils/snake.js')
const { pg: { users } } = require('../services/')

module.exports = {
  getById: (req, res) => {
    const {
      sub: userId
    } = req.user

    return users
      .get(userId)
      .then(camel)
  },
  update: (req, res) => {
    const {
      userId,
      payload: user
    } = req

    const withId = Object.assign({}, payload, { userId })

    return users
      .update(withId)
  },
  create: (req, res) => {
    const {
      body: user
    } = req

    console.log(req.body);

    return users
      .create(user)
      .then(result => res.json(result))
  }
}
