'use strict'

const path = require('path')
const http = require("http")
const express = require('express')
const morgan = require('morgan')
const serve = require('express').static

const app = express()



app.use(morgan('combined'))
app.use(serve(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html')
})

http.createServer(app).listen(5000)
console.log("Server has started.")


