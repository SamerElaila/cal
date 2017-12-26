const knex = require('../knex.js')
const { USERS_TABLE_NAME } = require('../table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.hasTable(USERS_TABLE_NAME, exists => {
    if (!exists) return

    return knex.schema.createTableIfNotExists(USERS_TABLE_NAME, user => {
      user.string('auth0_id').primary()
      user.string('stripe_connected_account_id')
    })
  })
  .then(resolve)
  .catch(reject)
})
