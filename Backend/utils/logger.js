const log = (...params) => {
    console.log(...params)
}

const error = (...params) => {
    console.error(...params)
}

const logger = {
    log,
    error,
}

module.exports = logger
