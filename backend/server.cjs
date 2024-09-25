const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./utils/db.cjs');
const passportConfig = require('./config/passport.cjs');
const authRoutes = require('./routes/auth.cjs');
const indexRoutes = require('./routes/index.cjs');
const cors = require('cors');

const app = express();

// Configuración de la base de datos
db();

// Configuración de Passport
passportConfig(passport);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'el_secreto', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/auth', authRoutes);
app.use('/', indexRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));