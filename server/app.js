const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const app = express()

const clientFolderPath = path.join(__dirname, 'client_build')
app.use(express.static(clientFolderPath))

app.listen(port, err => {
  if (err) throw err

  console.log(`server started on port ${port}`);
})
