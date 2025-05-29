// controllers/authController.js
const db = require('../db');

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
};

module.exports = {
  loginUser
};
