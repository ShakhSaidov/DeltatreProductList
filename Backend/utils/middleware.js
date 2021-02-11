const logger = require('./logger')

const consoleLogger = (request, response, next) => {
    logger.log('Method:', request.method)
    logger.log('Path:  ', request.path)
    logger.log('Body:  ', request.body)
    logger.log('---')
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