const initUsersTable = require('./users.js')
const initEventsTable = require('./events.js')
const initTicketsTable = require('./tickets.js')

module.exports = {
  initDb: () => initUsersTable()
    .then(() => initEventsTable())
    .then(() => initTicketsTable())
    .then(() => {})
}
