const log = (...params: string[]): void => {
    if(process.env.NODE_ENV !== 'test') console.log(...params)
}

const error = (...params: string[]): void => {
    if(process.env.NODE_ENV !== 'test') console.error(...params)
}

export default {
    log,
    error,
}
