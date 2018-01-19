const jwt = require('jsonwebtoken')

const { redis: { session: sessionStore } } = require('../')
const { JWT_SECRET } = require('../../config.js')

const verifyJWT = sessionJWT =>
  new Promise((resove, reject) => {
    jwt.verify(sessionJWT, JWT_SECRET, (err, decoded) => {
      if (err) return reject(createError(errorTypes.INVALID_SESSION)(err))

      return resolve(decoded)
    })
  })

module.export = sessionJWT => {
  Promise.all([verifyJWT(sessionJWT), sessionStore.get(sessionJWT)]).then(
    ([decoded, userId]) => {
      if (userId === undefined) return false
      // return Promise.reject(createError(errorTypes.INVALID_SESSION)())
      if (userId !== decoded.userId) return false

      return true
    }
  )
}
