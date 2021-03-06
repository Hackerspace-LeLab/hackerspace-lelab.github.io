'use strict'
import consola from 'consola'

let socket

export function connect (protocol = 'https', host, port) {
  // virtual ip address
  if (typeof socket === 'undefined') {
    if (protocol.includes('https')) {
      socket = new WebSocket('wss://' + host + ':' + port)
    } else if (protocol.includes('http')) {
      socket = new WebSocket('ws://' + host + ':' + port)
    }
  } else {
    return socket
  }

  socket.onopen = () => {
    consola.log('CONNECTING TCP client to WebSocket server')
    if (socket.readyState === WebSocket.OPEN) {
      consola.log('TCP connection to WebSocket server is OPEN')
      socket.busy = false
    }
  }

  socket.onerror = (event) => {
    socket.error = true
  }

  socket.onclose = (event) => {
    consola.log('Server is CLOSING TCP connection')
    if (socket.readyState === WebSocket.CLOSED) {
      consola.log('TCP connection to WebSocket server is CLOSED')
      if (event.reason.length !== 0) {
        alert(event.reason)
      }
    }
  }

  socket.addEventListener('message', (event) => {
    if (event.type === 'string') {
      try {
        socket.data = JSON.parse(event.data)
      } catch (e) {
        socket.data = event.data
      }
    } else {
      consola.log('Binary type message incoming is not managed...')
    }
  })
}

export function send (data) {
  if (socket.readyState === WebSocket.OPEN) {
    if (socket.busy === true) {
      setTimeout(() => {
        if (socket.bufferedAmount === 0) {
          socket.busy = false
          consola.log('Socket is ready for sending')
        }
      }, 50)
    }
    if (data !== 'string') {
      socket.send(JSON.stringify(data))
    } else {
      socket.send(data)
    }
    socket.busy = true
  }
}

export function data () {
  return socket.data
}
