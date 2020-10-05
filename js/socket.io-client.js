const io = require('socket.io-client')
const socket = io('http://localhost')

const { form, content } = require('./script')

socket.on('connect', () => {
    console.log('client has sucessfully connected to server websocket')
    socket.emit('newsletter', form.data)
    socket.emit('translation', lang)
})

socket.on('content', data => {
    console.log('content successfully received')
    content.data = data
})

socket.on('response', ack => { console.log(ack) })

socket.on('disconnect', () => {
    console.log('client is disconnected from server websocket')
    socket.close()
})
