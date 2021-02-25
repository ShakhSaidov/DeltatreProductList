const { set } = require("../app")

const setCache = (request, response, next) => {
    // here you can define period in second, this one is 5 minutes
    const period = 60 * 5

    // you only want to cache for GET requests
    if (request.method == 'GET') {
        response.set('Cache-control', `public, max-age=${period}`)
    } else {
        // for the other requests set strict no caching parameters
        response.set('Cache-control', 'no-store')
    }

    // remember to call next() to pass on the request
    next()
}

module.exports = setCache