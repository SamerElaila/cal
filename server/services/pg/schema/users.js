const knex = require('../knex.js')
const { USERS_TABLE_NAME } = require('./table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.createTableIfNotExists(USERS_TABLE_NAME, events => {
    event.increments('id').primary()
    event.string('name')
    event.string('email')
  }).then(resolve).catch(reject)
})
