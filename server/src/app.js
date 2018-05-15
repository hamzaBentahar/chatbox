const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
  .use(bodyParser.json())
  .use(cors())
  .get('/status', function (req, res) {
    res.send({
      'message' : 'Hello World!'
    })
  })

app.listen(process.env.port || 8081)
