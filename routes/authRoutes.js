const express = require('express');
const router = express.Router();

// login controller
const { login } = require('../controllers/authController');

// It will return a JWT token if login is successful
router.post('/login', login);

module.exports = router;
