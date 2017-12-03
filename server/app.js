const express = require('express')
const path = require('path')
const crashpad = require('crashpad')

const endpoints = require('./endpoints/')
const middlewares = require('./middleware/')
const services = require('./services/')

const app = express()
const port = process.env.PORT || 3000

const apiRouter = new express.Router()
  .use('/users', endpoints.users)
  .use('/events', endpoints.events)
  // .use('/auth', endpoints.auth)

app
  .use('/', express.static(path.join(__dirname, 'public')))
  .use('/api', middlewares.authenticate(), apiRouter)
  .use(crashpad())

services.start().then(() => {
  app.listen(port, err => {
    if (err) return Promise.reject(err)

    console.log(`Server started on port ${port}`);
  })
}).catch(err => {
  console.error(err)
})
