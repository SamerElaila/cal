const { EVENTS_TABLE_NAME } = require('../table_names.js')
const snake = require('../../../utils/snake.js')
const camel = require('../../../utils/camel.js')
const events = require('../knex.js')(EVENTS_TABLE_NAME)

module.exports = {
  getByUserId: creator_id => events
    .where({ creator_id })
    .then(camel),
  create: event => events
    .insert(snake(event)),
  update: event => events
    .update(snake(event))
}
