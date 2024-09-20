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

const crearUsuario = async (req, res) => {
    const userExists = await findOneUserByNameEmailOrOauthId(req.body);
    if (userExists) {
        return res.status(200).json({ message: 'El usuario ya está registrado' });
    }
    const newUser = await insertUser(req.body);
    return res.status(201).json({ message: 'Usuario registrado' });
}

const logUsuario = async (req,res) => {
    const userExists = await findOneUserByNameEmailOrOauthId(req.body);
    if (userExists) {
        return res.status(201).json({ message: 'Usuario loggeado' });
    }
}

// Exportar modelos
module.exports = {
    GoogleUser,
    FacebookUser,
    DiscordUser,
    user,
    crearUsuario,
    logUsuario
};
