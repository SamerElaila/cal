const { USERS_TABLE_NAME } = require('../table_names.js')
const camel = require('../../../utils/camel.js')
const snake = require('../../../utils/snake.js')
const users = require('../knex.js')(USERS_TABLE_NAME)

module.exports = {
  get: id => users
    .where({ id })
    .then(camel),
  create: user => users
    .insert(snake(user)),
  update: user => users
    .update(snake(user))
}
