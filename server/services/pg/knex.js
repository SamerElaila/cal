module.exports = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: 'develop_cal',
    user: 'postgres',
    password: 'postgres'
  },
  debug: true
})
