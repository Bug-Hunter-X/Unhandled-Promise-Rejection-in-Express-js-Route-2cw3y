const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data ...
  db.query('SELECT * FROM users WHERE id = $1', [userId])
    .then(userData => {
      if (!userData) {
        res.status(404).send('User not found');
      } else {
        res.json(userData);
      }
    })
    .catch(err => {
      console.error('Error fetching user:', err);
      res.status(500).send('Server error');
    });
});