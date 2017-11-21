const path = require('path')
const clientFolderPath = path.join(__dirname, 'client_build')

module.exports = () => {
  const router = new express.Router()

  return router
    .use(express.static(clientFolderPath))
}
