const jwt = require('jsonwebtoken');

const generateToken = (data, options) => {
    return jwt.sign(data, options.secret);
};

const verifyToken = (token, options) => {
    return jwt.verify(token, options.secret);
};

module.exports = {
    generateToken,
    verifyToken,
};
