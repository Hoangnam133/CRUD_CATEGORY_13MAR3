const express = require('express')
const app = express()
app.use(express.json())
require('./configs/connectDB')
app.use('/api/v1',require('./routers/index'))
module.exports = app