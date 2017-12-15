const camel = require('../utils/camel.js')
const snake = require('../utils/snake.js')
const { pg: { events } } = require('../services/')

module.exports = {
  get: (req, res) => {
    const { eventId } = req.params

    return events
      .get(eventId)
  },
  getAll(req, res) {
    const { userId } = req.params

    console.log(req.url);

    return events
      .getByUserId(userId)
      .then(result => { res.json(result) })
  },
  create(req, res) {
    const {
      params: { userId },
      payload
    } = req

    return events
      .create(Object.assign({}, payload, { userId }))
      .then(result => { res.json(result) })
  },
  update: (req, res) => {
    const {
      params: { eventId },
      payload
    } = req

    return events
      .update(Object.assign({}, payload, { eventId }))
      .then(result => { res.json(result) })
  }
}
