const knex = require('../knex.js')
const { USERS_TABLE_NAME, EVENTS_TABLE_NAME } = require('./table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.createTableIfNotExists(EVENTS_TABLE_NAME, events => {
    event.increments('id').primary()
    event.string('name')
    event.string('description')
    event.forign('creator_id').references('id').on(USERS_TABLE_NAME)
    event.string('location')
    event.string('ticket_price')
    event.string('ticket_quantity')
  }).then(resolve).catch(reject)
})
