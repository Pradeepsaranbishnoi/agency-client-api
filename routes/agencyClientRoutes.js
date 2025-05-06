const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  createAgencyClient,
  updateClient,
  getTopClient
} = require('../controllers/agencyClientController');

// Route to create an agency and a client in one request
router.post('/agency-client', auth, createAgencyClient);

// Route to update an existing client's details using clientId
router.put('/clients/:clientId', auth, updateClient);

// Route to get the top client based on the highest total bill
router.get('/top-client', auth, getTopClient);

module.exports = router;
