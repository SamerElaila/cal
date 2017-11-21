module.exports = {
  ...require('./model/'),
  start: require('./schema/').initDb
}
