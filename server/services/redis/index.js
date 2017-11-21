module.exports = {
  session: require('./session'),
  start: () => new Promise(resolve => resolve())
}
//
// () => new Promise((resolve, reject) => {
//   const client = require('./client/')
//   client.on('ready', () => resolve(client))
//   client.on('error', reject)
// })
