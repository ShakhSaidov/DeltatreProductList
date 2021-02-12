const app = require('./src/app')
const http = require('http').Server(app)
const logger = require('./utils/logger')
const io = require('socket.io')(http)

//Setting up a socket
io.on("connection", socket => {
    console.log("New client connected")

    socket.on("incoming data", (data) => {
        socket.broadcast.emit("outgoing data", { num: data });
    })

    socket.on("disconnect", () => console.log("Client disconnected"));
})

/*eslint-disable*/
const PORT = process.env.PORT || 3001

http.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`)
})


