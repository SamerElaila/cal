const jwt = require('jwt')
const boom = require('boom')

const { redis: { session: sessionStore } } = require('../')
const { JWT_SECRET } = require('../../config.js')

const { name, errorTypes } = require('./constants.js')

const createJWT = claims => new Promise((resove, reject) => {
  const JWTContent = {
    ...claims,
    iat: Date.now()
  }
  jwt.sign(JWTContent, JWT_SECRET, (err, sessionJWT) => {
    if (err) return reject(boom.badImplementation('Failed to create session'))

    return resolve(sessionJWT)
  })
})

module.exports = JWTContent => {
  const { sessionType } = JWTContent
  createJWT(JWTContent).then(sessionJWT => )


    return sessionStore
      .create(LOGGED_IN, sessionJWT, )
      .then(() => createJWT(decoded))
      .then(freshSessionJWT =>
        sessionStore.create(freshSessionJWT, userId)
          .then(() => ({
            decoded,
            freshSessionJWT
          }))
      )
  })
}

module.exports.start = new Promise(resove => { resolve() })
module.exports.name = name
