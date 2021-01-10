const express = require('express')
const cors = require('cors')

const port = 3000
const app = express()
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');

app.use(cors())

app.use('/', authRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`)
  })

module.exports = app;