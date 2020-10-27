const ErrorResponse = require('../helper/ErrorResponse');

const errorHandler = (err, req, res, next) => {
    let code = 500;
    let message = 'Internal server error';
    if(err instanceof ErrorResponse) {
        code = err.code;
        message = err.message;
    }
    res.status(code).json({
        succsses: false,
        error: message
    })
};

module.exports = errorHandler;
