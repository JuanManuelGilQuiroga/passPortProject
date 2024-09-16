const mongoose = require('mongoose');

// Esquema para Google
const GoogleUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'googleusers' });

// Esquema para Facebook
const FacebookUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'facebookusers' });

// Esquema para Discord
const DiscordUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'discordusers' });

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);
const FacebookUser = mongoose.model('FacebookUser', FacebookUserSchema);
const DiscordUser = mongoose.model('DiscordUser', DiscordUserSchema);

// Exportar modelos
module.exports = {
    GoogleUser,
    FacebookUser,
    DiscordUser
};
