const stripe = require('stripe')(require('../../config').stripe.STRIPE_SECRET)
const boom = require('boom');
// const jwt = require('node-jwt');

const { pg: { users, events } } = require('../services/')

module.exports = {
  buy: (req, res, next) => {
    const {
      body: {
        eventId,
        stripeCardToken
      }
    } = req

    console.log('ticket request', req.body);
    events
      .getWithPurchaseInfo(eventId)
      .then(event => {
        console.log(event);
        return stripe.charges
          .create({
            amount: event.ticketPrice,
            currency: 'gbp',
            source: stripeCardToken.id
          }, {
            stripe_account: event.stripeConnectedAccountId
          }).catch(e => {
            console.error(`Stripe payment failed with error: ${e.message}`)
            return boom.badRequest('payment failed')
          })
    }).then(() => {
      res.json({
        success: true
      })
    })
  }//,
  // generateQRCode: (req, res, next) => {
  //   tickets
  //     .getTicket(ticketId)
  //     .then(ticket => {
  //       return jwt.sign(require('../../config').tickets.TICKET_JWT_SECRET, {
  //         userId,
  //         ticketId
  //       })
  //     })
  //     .then(generateQRCode)
  //     .then(qrCode => {
  //       res.json({ ticketQrCodeSvg })
  //     })
  // }
}
