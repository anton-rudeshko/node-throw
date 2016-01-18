var format = require('util').format;

/**
 * Function wrapper for throw statement.
 * Throw an error with formatted message.
 * @param {Error|String} error — instance of error or error message.
 * @throws
 */
module.exports = function(error) {
    if (error instanceof Error) {
        throw error;
    }

    throw new Error(format.apply(null, arguments));
};
