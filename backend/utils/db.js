const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost:27017/db')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
};