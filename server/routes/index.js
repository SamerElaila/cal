module.exports = services => ({
  events: require('./events.js')(services),
  users: require('./users.js')(services)
  app: require('./app.js')(services)
})
