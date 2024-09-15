const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'discordusers' });

module.exports = mongoose.model('DiscordUser', userSchema);
