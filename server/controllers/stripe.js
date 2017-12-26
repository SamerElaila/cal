const { users } = require('../services/pg')
const request = require('request')
const url = require('url')
const queryString = require('querystring')

const { STRIPE_SECRET, STRIPE_CLIENT_KEY } = require('../../config.js').stripe

const stripeConnect = code => new Promise((resolve, reject) => {
  request.post({
    url: 'https://connect.stripe.com/oauth/token',
    form: {
      grant_type: "authorization_code",
      client_id: STRIPE_CLIENT_KEY,
      code: code,
      client_secret: STRIPE_SECRET
    }
  }, (err, response, body) => {
    if (response.statusCode < 200 || response.statusCode >=300){
      console.log(response.statusCode, body);
      return reject('Stripe returned bad status code')
}
    resolve(JSON.parse(body))
  })
})

module.exports = {
  connectCallback: (req, res, next) => {
    const {
      body: { stripeCallbackUrlSearch },
      user: { sub: auth0Id }
    } = req

    const { code } = queryString.parse(stripeCallbackUrlSearch)

    console.log({
      qsp: stripeCallbackUrlSearch,
      body: req.body,
      qs: queryString.parse(stripeCallbackUrlSearch)
    });

    stripeConnect(code)
      .then(({ stripe_user_id: stripeConnectedAccountId }) => {
        return users.update({
          auth0Id,
          stripeConnectedAccountId
        })
      }).then(() => {
        res.redirect('/')
      }).catch(next)
  }
}
