// routes/contact.js
const express = require('express');
const router = express.Router();
const { saveContactMessage } = require('../controllers/contactController');

router.post('/send', saveContactMessage);

module.exports = router;
