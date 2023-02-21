const express = require('express');
const db = require('./db');
SECRET_PASSWORD = 'gjjhjgka122132jkj';
router = express.Router();
const ab = 'sfsa';
router.get('/email', (req, res) => {
  db.query('SELECT email FROM users WHERE id = ' + req.query.id).then((rec) => {
    // logical flow
    res.send(rec[0]);
  });
});
