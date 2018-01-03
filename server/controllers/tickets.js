const stripe = require('stripe')(require('../../config').stripe.STRIPE_SECRET)
const boom = require('boom');
// const jwt = require('node-jwt');

const { pg: { users, events, tickets } } = require('../services/')

module.exports = {
  buy: (req, res, next) => {
    const {
      body: {
        eventId,
        stripeCardToken
      },
      params: {
        userId
      }
    } = req

    tickets.book({
      userId,
      eventId
    }).then(ticket => {
      return events
      .getWithPurchaseInfo(eventId)
      .then(event => {
        return stripe.charges
        .create({
          amount: event.ticketPrice,
          currency: 'gbp',
          source: stripeCardToken.id
        }, {
          stripe_account: event.stripeConnectedAccountId
        })
        .then(() => {
          res.json({
            success: true,
            ticket
          })
        })
        .catch(e => {
          console.error(`Stripe payment failed with error: ${e.message}`)
          // TODO: unbook ticket
          return boom.badRequest('payment failed')
        })
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
