"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = (...params) => {
    if (process.env.NODE_ENV !== 'test')
        console.log(...params);
};
const error = (...params) => {
    if (process.env.NODE_ENV !== 'test')
        console.error(...params);
};
exports.default = {
    log,
    error,
};
