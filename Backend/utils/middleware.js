const logger = require('./logger')

const consoleLogger = (request, response, next) => {
    logger.log('Request Method:', request.method)
    logger.log('Request Path:  ', request.path)
    logger.log('Request Body:  ', request.body)
    logger.log('------------------------------')
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
    next(error)
}

const middleware = {
    consoleLogger,
    errorHandler
}

module.exports = middleware