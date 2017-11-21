const express = require('express')
const path = require('path')

const routes = require('./routes/')
const services = require('./services/')

const port = process.env.PORT || 3000

const app = express()

const apiRouter = new express.Router()
  .use('/users', routes.users)
  .use('/events', routes.events)

app
  .use('/', routes.app)
  .use('/api', apiRouter)


Promise.all(Object
  .keys(services)
  .map(serviceName => {
    return services[serviceName]
      .start()
      .then(res => {
        console.log(`Service ${serviceName} sucessfully started`)
        if (res) {
          console.log(`${serviceName}: ${res}`)
        }
      })
      .catch(err => {
        console.error(`Service ${serviceName} failed to start`)
        return Promise.reject(err)
      })
  })
).then(() => {
  app.listen(port, err => {
    if (err) throw err

    console.log(`Server started on port ${port}`);
  })
}).catch(err => {
  console.error(err)
})
