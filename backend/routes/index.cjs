const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.redirect('/');
  }
});

router.get('/', (req, res) => {
  res.send('Home Page');
});

module.exports = router;