const express = require('express')
const path = require('path')
const crashpad = require('crashpad')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const endpoints = require('./endpoints/')
const middlewares = require('./middleware/')
const services = require('./services/')
const { userEvents: userEventsController } = require('./controllers/')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())

const apiRouter = new express.Router()
  .use('/user/:userId', middlewares.authoriseUserId, endpoints.users)
  .use('/user/:userId/event', middlewares.authoriseUserId, endpoints.userEvents)
  .use('/stripe', endpoints.stripe)

app
  .use(morgan('tiny'))
  .use('/', express.static(path.join(__dirname, 'public')))
  .use('/api', middlewares.checkJwt, apiRouter)
  .use((error, req, res, next) => {
    console.error(error)
    next(error)
  })
  .use(crashpad())

services.start().then(() => {
  app.listen(port, err => {
    if (err) return Promise.reject(err)

    console.log(`Server started on port ${port}`);
  })
}).catch(err => {
  console.error(err)
})
