var statusCodes = require('./statusCodes.json');

module.exports = function(status) {
    if(!statusCodes[status])
        return "Unknown error";
    
    return statusCodes[status];
};