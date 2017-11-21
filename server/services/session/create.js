const jwt = require('jwt')

const { redis: { session: sessionStore } } = require('../')
const { JWT_SECRET } = require('../../config.js')

const { name, errorTypes } = require('./constants.js')

const createError = require('../../utils/createError.js')(name)

const createJWT = JWTContent => new Promise((resove, reject) => {
  jwt.sign(JWTContent, JWT_SECRET, (err, sessionJWT) => {
    if (err) {
      return reject(createError({
        payload: err
      }))
    }


    return resolve(sessionJWT)
  })
})

module.export = JWTContent => {
  const { sessionType } = JWTContent
  const sessionJWT = createJWT(JWTContent)


    if (userId === undefined) {
      return Promise.reject(createError({
        errorType: errorTypes.INVALID_SESSION
      })())
    }

    return sessionStore
      .delete(sessionJWT)
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
