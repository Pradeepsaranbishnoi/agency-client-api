const jwt = require('jsonwebtoken');

// Middleware for checking if the user is authenticated
module.exports = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // If there is no token then show error
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    // If token is invalid then send error response
    res.status(400).json({ message: 'Invalid token.' });
  }
};
