var format = require('util').format;

/**
 * Function wrapper for throw statement.
 * Throw an error with formatted message.
 * @param {Error|Function|String} error — instance of error, error class or error message.
 * @throws
 */
module.exports = function(error) {
    if (error instanceof Error) {
        throw error;
    }

    if (typeof error === 'function') {
            // get arguments except the first
        var args = Array.prototype.slice.call(arguments, 1),
            // create instance of specified error class with specified arguments
            err = new (Function.prototype.bind.apply(error, [null].concat(args)))();

        throw err;
    }

    throw new Error(format.apply(null, arguments));
};
