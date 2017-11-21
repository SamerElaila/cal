const { promisify } = require('util')
const redis = require('redis')

module.exports = promisify(redis.createClient())
