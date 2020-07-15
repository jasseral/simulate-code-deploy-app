const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('I am a code deploy app simulation')
})


app.listen(3000,() => {
    console.log('app started on port 3000')
})