const initUsersTable = require('./users.js')
const initEventsTable = require('./events.js')

module.exports = {
  initDb: () => initUsersTable()
    .then(() => initEventsTable())
    .then(() => {})
}
