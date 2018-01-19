const services = {
  redis: require('./redis/'),
  pg: require('./pg/')
}

const startService = serviceName =>
  services[serviceName]
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

const startServices = () => Promise.all(Object.keys(services).map(startService))

module.exports = {
  ...services,
  start: startServices
}
