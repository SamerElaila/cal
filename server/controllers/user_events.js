const boom = require('boom')

const { pg: { events } } = require('../services/')

module.exports = {
  get: (req, res) => {
    const { params: { eventId, userId } } = req.params

    return events.get(eventId)
  },
  getAll (req, res) {
    const { params: { userId } } = req

    return events.getByUserId(userId).then(result => {
      res.json(result)
    })
  },
  create (req, res) {
    const { params: { userId }, body } = req

    return events
      .create(Object.assign({}, body, { creatorId: userId }))
      .then(result => {
        res.json(result)
      })
  },
  update: (req, res, next) => {
    const { params: { eventId, userId }, payload } = req

    return events
      .get(eventId)
      .then(event => {
        if (event.creatorId !== userId) return reject(boom.notFound())

        return event
      })
      .update(Object.assign({}, payload, { eventId }))
      .then(result => {
        res.json(result)
      })
      .catch(next)
  }
}
