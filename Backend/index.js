const app = require('./src/app')
const http = require('http').Server(app)
const logger = require('./utils/logger')

const PORT = process.env.PORT || 3001

http.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`)
})


