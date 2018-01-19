const resis = require('./client')

module.exports = {
  set: (type, key, value) =>
    new Promise((resolve, reject) => {
      client.hmset(`SESSION:${type}`, key, value, err => {
        if (err) return reject(err)

        resolve()
      })
    }),
  delete: (type, key) =>
    new Promise((resolve, reject) => {
      client.hmdel(`SESSION:${type}`, key, err => {
        if (err) return reject(err)

        resolve()
      })
    }),
  get: (type, key) =>
    new Promise((resolve, reject) => {
      client.hmget(`SESSION:${type}`, key, err => {
        if (err) return reject(err)

        resolve()
      })
    })
}
