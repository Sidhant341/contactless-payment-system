const express = require('express')
const cors = require('cors')

const port = 3000
const app = express()

app.use(cors())

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
  })

module.exports = app;