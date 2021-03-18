"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const consoleLogger = (request, _response, next) => {
    logger_1.default.log('Request Method:', request.method);
    logger_1.default.log('Request Path:  ', request.path);
    logger_1.default.log('Request Body:  ', request.body);
    logger_1.default.log('------------------------------');
    next();
};
const errorHandler = (error, _request, _response, next) => {
    logger_1.default.error('Error caught: ', error.message);
    next(error);
};
exports.default = {
    consoleLogger,
    errorHandler
};
