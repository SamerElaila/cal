const camel = require('../utils/camel.js')
const snake = require('../utils/snake.js')
const { pg: { users } } = require('../services/')

module.exports = { // TODO: User creation detection
  // getById: (req, res) => {
  //   const {
  //     sub: userId
  //   } = req.user
  //
  //   return users
  //     .get(userId)
  //     .then(camel)
  // },
  getInfo: (req, res, next) => {
    const {
      user: {
        sub: userId
      }
    } = req

    return users
      .get(userId)
      .then(result => result ? result : {}) // and what?
      .then(camel)
      .then(userData => {
        console.log({userData});
        res.json({
          stripeConnected: userData && userData.stripeConnectedAccountId
        })
      })
      .catch(next)
  }//,
  // update: (req, res) => {
  //   const {
  //     userId,
  //     payload: user
  //   } = req
  //
  //   const withId = Object.assign({}, payload, { userId })
  //
  //   return users
  //     .update(withId)
  // },
  // create: (req, res) => {
  //   const {
  //     body: user
  //   } = req
  //
  //   console.log(req.body);
  //
  //   return users
  //     .create(user)
  //     .then(result => res.json(result))
  // }
}
