const knex = require('../knex.js')
const {
  EVENTS_TABLE_NAME,
  TICKETS_TABLE_NAME
} = require('../table_names.js')
const snake = require('../../../utils/snake.js')
const camel = require('../../../utils/camel.js')
const tickets = () => require('../knex.js')(TICKETS_TABLE_NAME)

module.exports = {
  get: ticketId => {
    return tickets()
      .where({ id: ticketId })
      .then(tickets => camel(tickets[0]))
  },
  getUserTickets: userId => {
    return tickets()
      .join(
        EVENTS_TABLE_NAME,
        `${TICKETS_TABLE_NAME}.event_id`,
        `=`,
        `${EVENTS_TABLE_NAME}.id`
      )
      .where(snake({ userId }))
      .then(res => res.map(camel))
  },
  book: ({ eventId, userId }) => {
    return knex.transaction(trx => {
      return trx(EVENTS_TABLE_NAME)
        .where(snake({ id: eventId }))
        .decrement('ticket_quantity', 1)
        .then(() => {
          return trx(TICKETS_TABLE_NAME)
            .insert(snake({
              eventId,
              userId
            }))
        })
    }).then(res => ({}))
  }
}
