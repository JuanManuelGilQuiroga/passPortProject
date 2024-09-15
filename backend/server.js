const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./utils/db');
const passportConfig = require('./config/passport');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');

const app = express();

// la config de la db
db();

// config de passport
passportConfig(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'tu_secreto', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// rutas
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));