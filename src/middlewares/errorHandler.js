// const ErrorResponse = require('../util/ErrorResponse')

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message
    console.error(err)

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Internal Server Error'
    })
}

module.exports = errorHandler