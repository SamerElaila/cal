const { EVENTS_TABLE_NAME, USERS_TABLE_NAME } = require('../table_names.js')
const snake = require('../../../utils/snake.js')
const camel = require('../../../utils/camel.js')
const events = () => require('../knex.js')(EVENTS_TABLE_NAME)

module.exports = {
  getByUserId: creatorId => events()
    .where(snake({ creatorId }))
    .then(res => res.map(camel))
  ,
  get: id => events()
    .where(snake({ id }))
    .then(res => res.map(camel))
  ,
  getWithPurchaseInfo: id => events()
    .join(
      USERS_TABLE_NAME,
      `${USERS_TABLE_NAME}.auth0_id`,
      '=',
      `${EVENTS_TABLE_NAME}.creator_id`
    )
    .where({ [`${EVENTS_TABLE_NAME}.id`]: console.log(id) || id })
    .then(res => camel(res[0]))
  ,
  create: event => events()
    .insert(snake(event))
  ,
  update: event => events()
    .update(snake(event))
}
