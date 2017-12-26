const { pg: { users } } = require('../services/')

module.exports = (req, res, next) => {
  if (!req.user) return next()

  const {
    user: {
      sub: auth0Id
    }
  } = req

  return users.get(auth0Id).then(userData => {
    if (!userData) {
      console.log('new user created:', auth0Id);
      return users.create({ auth0Id })
    }
  })
  .then(next)
  .catch(next)


}
