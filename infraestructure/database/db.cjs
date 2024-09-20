const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://mongo:123@monorail.proxy.rlwy.net:44466/OAuth2', { 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true 
  })
    .then(() => {
      console.log('MongoDB conectado');
      const db = mongoose.connection.useDb('OAuth2');
      console.log('Conectado a la db de OAuth2');
    })
    .catch(err => console.error('MongoDB connection error:', err));
};
