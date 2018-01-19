if (!['test', 'development', 'production'].includes(process.env.NODE_ENV))
  throw new Error('NODE_ENV must be set to test, development or production')

const config = require('./private.js')

module.exports = config[process.env.NODE_ENV]
