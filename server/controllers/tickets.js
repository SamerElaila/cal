const stripe = require('stripe')(require('../../config').stripe.STRIPE_SECRET)
const boom = require('boom')
const QRCode = require('qrcode')
const jwt = require('jsonwebtoken')

const { pg: { users, events, tickets } } = require('../services/')
const { TICKET_JWT_SECRET } = require('../../config').tickets

const generateQRCode = jwt =>
  new Promise((resolve, reject) => {
    QRCode.toString(jwt, { type: 'svg' }, (err, res) => {
      if (err) return reject(err)

      resolve(res)
    })
  })

const generateJWT = ({ userId, ticketId }) =>
  new Promise((resolve, reject) => {
    jwt.sign({ userId, ticketId }, TICKET_JWT_SECRET, (err, res) => {
      if (err) return reject(err)

      resolve(res)
    })
  })

module.exports = {
  buy: (req, res, next) => {
    const { body: { eventId, stripeCardToken }, params: { userId } } = req

    tickets
      .book({
        userId,
        eventId
      })
      .then(ticket => {
        return events.getWithPurchaseInfo(eventId).then(event => {
          return stripe.charges
            .create(
            {
              amount: event.ticketPrice,
              currency: 'gbp',
              source: stripeCardToken.id
            },
            {
              stripe_account: event.stripeConnectedAccountId
            }
            )
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
  },
  getAll: (req, res, next) => {
    const { params: { userId } } = req

    tickets
      .getUserTickets(userId)
      .then(tickets => res.json(tickets))
      .catch(next)
  },
  generateQRCode: (req, res, next) => {
    const { params: { ticketId } } = req

    tickets
      .get(ticketId)
      .then(generateJWT)
      .then(generateQRCode)
      .then(ticketQrCodeSvg => {
        res.json({ ticketQrCodeSvg })
      })
  }
}
