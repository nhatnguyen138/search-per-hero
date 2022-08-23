const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({"message": "This is the backend."})
})

const apiRouter = require('./routes/heroes')
app.use('/api', apiRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))