const express = require('express')
const path = require('path')
var app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'))

app.listen(PORT)

