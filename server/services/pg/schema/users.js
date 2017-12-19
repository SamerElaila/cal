const knex = require('../knex.js')
const { USERS_TABLE_NAME } = require('../table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.dropTableIfExists(USERS_TABLE_NAME).then(() => {
    knex.schema.createTableIfNotExists(USERS_TABLE_NAME, user => {
      user.string('auth0_id').primary()
      user.string('stripe_connected_account_id')
    }).then(resolve).catch(error => {
      console.log('oh no!', error);
      reject(error)
    })
  })
})
