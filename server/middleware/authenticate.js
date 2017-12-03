// const { authenticate } = require('../services/')
const jwt = require('express-jwt')

module.exports = () => jwt({
  secret: require('../config.js').authenticate.JWTSecret,
  credentialsRequired: false
})
//   const authHeader = req.headers.Authorization;
//   const sessionsJWT = authHeader && authHeader.split(' ')[1]
//   if (!sessionsJWT) return next()
//
//   authenticate(sessionsJWT).then(({ userId, freshSessionJWT }) => {
//     req.session = decoded
//     req.headers.Authorization = `Bearer ${freshSessionJWT}`
//
//     next()
//   })
//   .catch(next)
// }
