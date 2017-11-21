const knex = require('../knex.js')
const { USERS_TABLE_NAME, EVENTS_TABLE_NAME } = require('../table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.dropTableIfExists(EVENTS_TABLE_NAME).then(() => {
    return knex.schema.createTableIfNotExists(EVENTS_TABLE_NAME, table => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.integer('creator_id').unsigned()
      table.foreign('creator_id').references('id').on(USERS_TABLE_NAME)
      table.string('location')
      table.string('ticket_price')
      table.string('ticket_quantity')
    })
  }).then(resolve).catch(reject)
})
