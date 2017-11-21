// const jwt = require('jwt')
//
// const { redis: { session: sessionStore } } = require('../')
// const { JWT_SECRET } = require('../../config.js')
//
// const name = 'AUTHENTICATION_SERVICE'
// const errorTypes = {
//   INVALID_SESSION: 'INVALID_SESSION'
// }
//
// const createError = require('../../utils/createError.js')(name)
//
// const verifyJWT = sessionJWT => new Promise((resove, reject) => {
//   jwt.verify(sessionJWT, JWT_SECRET, (err, decoded) => {
//     if (err) return reject(createError(errorTypes.INVALID_SESSION)(err))
//
//     return resolve(decoded)
//   })
// })
//
// const createJWT = oldDecodedSessionJWT => new Promise((resove, reject) => {
//   jwt.sign(oldDecodedSessionJWT, JWT_SECRET, (err, sessionJWT) => {
//     if (err) return reject(err)
//
//     return resolve(sessionJWT)
//   })
// })
//
// module.export = sessionJWT => {
//   Promise.all([
//     verifyJWT(sessionJWT),
//     sessionStore.get(sessionJWT)
//   ]).then(([ decoded, userId ]) => {
//     if (userId === undefined)
//       return Promise.reject(createError(errorTypes.INVALID_SESSION)())
//
//     return sessionStore
//       .delete(sessionJWT)
//       .then(() => createJWT(decoded))
//       .then(freshSessionJWT =>
//         sessionStore.create(freshSessionJWT, userId)
//           .then(() => ({
//             decoded,
//             freshSessionJWT
//           }))
//       )
//   })
// }
//
// module.exports.start = new Promise(resove => { resolve() })
// module.exports.name = name
