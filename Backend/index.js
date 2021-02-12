const app = require('./src/app')
const http = require('http')
const logger = require('./utils/logger')

const server = http.createServer(app)

/*eslint-disable*/
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`)
})