const initUsersTable = require('./users.js')
const initEventsTable = require('./events.js')

module.exports = () => initUsersTable()
    .then(() => initEventsTable())
