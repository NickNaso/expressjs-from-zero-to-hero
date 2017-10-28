'use strict'

const http = require("http")
const express = require('express')

const app = express()

app.get('/start', (req, res) => {
    res.status(200).send('Hello')
})

app.get('/finish', (re, res) => {
    res.status(200).send('Goodbye')
})

http.createServer(app).listen(5000)
console.log("Server has started.")


