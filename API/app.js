const express = require('express')
const cors = require('cors')

const port = 3000
const app = express()
const authRouter = require('./routes/authRouter');

app.use(cors())

app.use('/', authRouter);

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
  })

module.exports = app;