import app from './app'
import * as http from 'http'
const server = new http.Server(app)

import logger from '../utils/logger'
import variables from './config/variables'

const PORT = variables.PORT || 3001

server.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`)
})
