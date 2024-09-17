const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('http://localhost:5173/profile');
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('http://localhost:5173/profile');
});

router.get('/discord', passport.authenticate('discord', { scope: ['identify', 'email']} ));
router.get('/discord/callback', passport.authenticate('discord', { failureRedirect: '/login' }), (req, res) => {
    console.log(req.session)
    res.redirect('http://localhost:5173/profile');
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Error durante el logout:", err);
            return res.status(500).send("Error durante el logout.");
        }
        // Limpiar la sesión o realizar otras acciones si es necesario
        req.session.destroy((err) => {
            if (err) {
                console.error("Error al destruir la sesión:", err);
                return res.status(500).send("Error al destruir la sesión.");
            }
            res.clearCookie('connect.sid'); // Limpiar la cookie
            console.log(req.session);
            console.log("sesion destruida")
            res.redirect('http://localhost:5173/login');
        });
    });
});

module.exports = router;