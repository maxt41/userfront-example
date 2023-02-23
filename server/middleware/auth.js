const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check for a token
  if (!token) {
    return res.status(401).json('Not Authorised');
  }

  // Verify token
  const secret = process.env.JWTSECRET
  try {
    jwt.verify(token, secret, { algorithms: ['RS256'] }, (error) => {
      if (error) {
        console.log(error)
        return res.status(401).json('Not Authorised');
      } else {
        next();
      }
    });
  } catch (err) {
    res.status(500).json('Server Error');
  }
};