const knex = require('../knex.js')
const { USERS_TABLE_NAME, EVENTS_TABLE_NAME } = require('../table_names.js')

module.exports = () => knex.schema.hasTable(EVENTS_TABLE_NAME).then(exists => {
  if (exists) return

  return knex.schema.createTableIfNotExists(EVENTS_TABLE_NAME, table => {
    table.increments()
    table.string('name')
    table.string('description')
    table.string('creator_id')
      .references('auth0_id')
      .inTable(USERS_TABLE_NAME)
    table.string('location')
    table.string('ticket_price')
    table
      .integer('ticket_quantity')
    // does not seem to work
    knex.schema.raw('CONSTRAINT tickets_left CHECK ticket_quantity > 0')
  })
})
