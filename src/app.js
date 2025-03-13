const express = require('express')
const app = express()
app.use(express.json())
require('./configs/connectDB')
app.use('/',require('./routers/index'))
module.exports = app