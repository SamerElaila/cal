const knex = require('../knex.js')
const { USERS_TABLE_NAME } = require('../table_names.js')

module.exports = () => new Promise((resolve, reject) => {
  knex.schema.createTableIfNotExists(USERS_TABLE_NAME, user => {
    user.increments('id').primary()
    user.string('name')
    user.string('email')
  }).then(resolve).catch(error => {
    console.log('oh no!', error);
    reject(error)
  })
})
