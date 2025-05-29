const express = require('express');
const router = express.Router();
const db = require('../db');

// Create new order
router.post('/', (req, res) => {
  const { name, email, order } = req.body;
  const sql = 'INSERT INTO custom_orders (name, email, order_details) VALUES (?, ?, ?)';
  db.query(sql, [name, email, order], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB Insert Failed' });
    res.json({ success: true, message: 'Order placed!' });
  });
});

// Get all orders
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM custom_orders';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'DB Fetch Failed' });
    res.json(results);
  });
});

// Update an order
router.put('/:id', (req, res) => {
  const { name, email, order } = req.body;
  const sql = 'UPDATE custom_orders SET name=?, email=?, order_details=? WHERE id=?';
  db.query(sql, [name, email, order, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB Update Failed' });
    res.json({ success: true, message: 'Order updated!' });
  });
});

// Delete an order
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM custom_orders WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB Delete Failed' });
    res.json({ success: true, message: 'Order deleted!' });
  });
});

module.exports = router;
