var format = require('util').format;

/**
 * Function wrapper for throw statement.
 * Throw an error with formatted message.
 * @param {String} errorMessage
 * @throws
 */
module.exports = function(errorMessage) {
    throw new Error(format.apply(null, arguments));
};
