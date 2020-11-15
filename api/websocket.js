'use strict'
const { default: consola } = require('consola')
const WebSocket = require('ws')
const { default: i18n } = require('../assets/i18n')
const Database = require('./database')

function websocket (serverOptions) {
  const wss = new WebSocket.Server(serverOptions)

  wss.on('connection', (ws) => {
    consola.log('client connected through websocket')

    ws.on('message', (message) => {
      consola.log('Message received')
      const data = JSON.parse(message)
      if (data.handler === 'newsletter') {
        consola.log('User data received')
        // serialize data from newsletter
        Database.connect((client, dbName) => {
        })
        ws.send('user data has been serialized')
      } else if (data.handler === 'translation') {
        const content = i18n.translate(data.lang)
        content.handler = 'content'
        ws.send(JSON.stringify(content))
        ws.send('text has been translated')
      } else {
        consola.log('Message:', message)
      }
    })

    ws.on('error', (error) => {
      consola.error(error)
    })

    ws.on('close', () => {
      consola.log('client disconnected from websocket')
    })
  })

  wss.on('error', (error) => {
    consola.error(error)
  })

  wss.on('close', () => {
    consola.log('closed websocket')
  })
}

module.exports = websocket
