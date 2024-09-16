const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
    console.log(req.isAuthenticated())
    console.log("Acceso concedido")
  } else {
    res.redirect('/login');
    console.log("Acceso denegado")
  }
});

router.get('/login', (req, res) => {
  res.send('Home Page');
});


module.exports = router;