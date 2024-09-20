const mongoose = require('mongoose');

const GoogleUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'googleusers' });

const FacebookUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'facebookusers' });

const DiscordUserSchema = new mongoose.Schema({
    oauthID: String,
    name: String,
    email: String,
    picture: String
}, { collection: 'discordusers' });

const standardUser = new mongoose.Schema({
    nick: String,
    email: String,
    password: String
}, { collection: 'users' })

const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema);
const FacebookUser = mongoose.model('FacebookUser', FacebookUserSchema);
const DiscordUser = mongoose.model('DiscordUser', DiscordUserSchema);
const user = mongoose.model('user', standardUser);

const insertUser = async (arg) => {
    let res = await new user(arg).save();
    return res
}
console.log("hola")

const findOneUserByNameEmailOrOauthId = async (arg) => {
    let res = await user.findOne({
        $or: [
            { oAuthId: arg.oAuthId },
            { nick: arg.nick },
            { email: arg.email }
        ]
    });
    return res
}

const findOneUserByNameAndPassword = async (arg) => {
    let res = await user.findOne({
        $and: [
            { nick: arg.nick },
            { password: arg.password }
        ]
    });
    return res
}

module.exports = {
    GoogleUser,
    FacebookUser,
    DiscordUser,
    user,
    insertUser,
    findOneUserByNameEmailOrOauthId,
    findOneUserByNameAndPassword
};
