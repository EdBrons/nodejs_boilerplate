import express from 'express'
import http from 'http'
import path from 'path'
import IO from 'socket.io'

const app = express()
const server = http.createServer(app)
const __dirname = path.resolve()
const io = IO(server)

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

const PORT = process.env.PORT || 2000

server.listen(PORT, () => {
    console.log("server listening on port " + PORT)
})

io.on('connection', (socket) => {
    // something
})