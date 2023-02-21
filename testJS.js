const express = require('express');
const db = require('./db');
SECRET_PASSWORD = 'gkajgka12412jkj';
router = express.Router();
const abs = 'sfsa';
router.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id).then(
    (record) => {
      // logical flow
      res.send(record[0]);
    }
  );
});
