const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://mongo:qtdWsTVICWBEJpLOuOGUuIOyABfKmRWB@monorail.proxy.rlwy.net:44466/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
};