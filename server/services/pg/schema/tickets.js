const knex = require('../knex.js')
const {
  USERS_TABLE_NAME,
  EVENTS_TABLE_NAME,
  TICKETS_TABLE_NAME
} = require('../table_names.js')

module.exports = () => knex.schema.hasTable(TICKETS_TABLE_NAME).then(exists => {
  if (exists) return

  return knex.schema.createTableIfNotExists(TICKETS_TABLE_NAME, table => {
    table.increments()
    table.string('user_id')
      .references('auth0_id')
      .inTable(USERS_TABLE_NAME)
    table.integer('event_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable(EVENTS_TABLE_NAME)
  })
})
