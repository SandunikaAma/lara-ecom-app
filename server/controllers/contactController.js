// controllers/contactController.js
const db = require('../db');

const saveContactMessage = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error saving contact message:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(200).json({ message: 'Message sent successfully' });
  });
};

module.exports = {
  saveContactMessage
};
