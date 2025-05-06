const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  // Generate a JWT token (you can replace this with real user validation later)
  const user = { id: 1, username: 'admin' };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};
