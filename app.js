const express = require('express')
const mailsRouter = require('./mails')
const assetsRouter = require('./assets')

const app = express()

app.use('/mail', mailsRouter)
app.use('/assets', assetsRouter)

app.get('/metadata', function (req, res) {
  res.json({
    name: '2025-qualifier-theme',
    version: '0.1.0'
  })
})

app.get('/event-title', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send('SUCTF 2025')
})

module.exports = app
