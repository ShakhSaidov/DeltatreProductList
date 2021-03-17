import { Request, Response, NextFunction } from 'express'
import logger from './logger'

const consoleLogger = (request: Request, _response: Response, next: NextFunction): void => {
    logger.log('Request Method:', request.method)
    logger.log('Request Path:  ', request.path)
    logger.log('Request Body:  ', request.body)
    logger.log('------------------------------')
    next()
}

const errorHandler = (error: Error, _request: Request, _response: Response, next: NextFunction): void => {
    logger.error('Error caught: ', error.message)
    next(error)
}

export default {
    consoleLogger,
    errorHandler
}