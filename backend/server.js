const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./utils/db');
const passportConfig = require('./config/passport');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');