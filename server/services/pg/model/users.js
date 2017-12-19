const { USERS_TABLE_NAME } = require('../table_names.js')
const camel = require('../../../utils/camel.js')
const snake = require('../../../utils/snake.js')
const users = () => require('../knex.js')(USERS_TABLE_NAME)

module.exports = {
  get: auth0Id => users()
    .where({ auth0_id: auth0Id })
    .then(camel)
    .then(users => users && users[0]),
  create: user => {
    return users()
      .insert(snake(user))
  },
  update: user => users()
    .update(snake(user))
}
