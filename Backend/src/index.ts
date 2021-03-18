import app from './app/app'
import * as http from 'http'
const server = new http.Server(app)

import logger from './app/utils/logger'
import variables from './app/config/variables'

const PORT = variables.PORT || 3001

server.listen(PORT, () => {
    logger.log(`Server running on port ${PORT}`)
})
