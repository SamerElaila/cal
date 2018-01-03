const knex = require('../knex.js')
const { USERS_TABLE_NAME, EVENTS_TABLE_NAME } = require('../table_names.js')

module.exports = () => knex.schema.hasTable(EVENTS_TABLE_NAME).then(exists => {
  if (exists) return

  return knex.schema.createTableIfNotExists(EVENTS_TABLE_NAME, table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('creator_id')
    table.foreign('creator_id').references(`${USERS_TABLE_NAME}.auth0_id`)
    table.string('location')
    table.string('ticket_price')
    table.string('ticket_quantity')
  })
})
