const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const PUB_KEY = fs.readFileSync((path.resolve('keys', 'rsa_public_08022021.pem')));
module.exports.auth = (req, res, next) => {
    const tokenParts = req.headers.authorization.split(' ');
    if (tokenParts[0] === 'Bearer' && tokenParts[1].match(/\S+\.\S+/) !== null) {
        try {
            req.jwt = jwt.verify(tokenParts[1], PUB_KEY, { algorithm: 'RS256' });
            next();
        } catch (err) {
            res.status(400).json({
                success: false,
                msg: "Authentication is required. Please login."
            })
        }
    }
}