const express = require('express');
const db = require('./db');
SECRET_PASSWORD = 'abcrdeg';
router = express.Router();
router.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id).then(
    (record) => {
      // logical flow
      res.send(record[0]);
    }
  );
});
