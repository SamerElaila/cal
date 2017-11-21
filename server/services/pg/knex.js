module.exports = require('knex')({
  client: 'pg',
  connections: {
    host: '127.0.0.1',
    database: 'develop_cal',
    user: 'postgres',
    password: 'postgres'
  }
})
