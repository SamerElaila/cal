const camel = require('../utils/camel.js')
const snake = require('../utils/snake.js')
const { pg: { events } } = require('../services/')

module.exports = {
  get: (req, res) => {
    const { eventId } = req.params

    return events
      .get(eventId)
      .then(camel)
  },
  getByCreatorId(req, res) {
    const { userId } = req.params

    return events
      .getByCreatorId(userId)
  },
  create(req, res) {
    const {
      user: { userId },
      payload: event
    } = req

    return events
      .create(Object.assign({}, event, { userId }))
  },
  update: (req, res) => {
    const {
      eventId
    } = req.params

    return events
      .update(req.payload)
  }
}
