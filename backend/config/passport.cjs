const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(new FacebookStrategy({
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await User.findOne({ oauthID: profile.id });
        if (user) {
            return done(null, user);
        }
        const newUser = await new User({
            oauthID: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            picture: profile._json.picture
        }).save();
        done(null, newUser);
    }));

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'emails', 'name', 'picture.type(large)']
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await User.findOne({ oauthID: profile.id });
        if (user) {
            return done(null, user);
        }
        const newUser = await new User({
            oauthID: profile.id,
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            picture: profile._json.picture.data.url
        }).save();
        done(null, newUser);
    }));
}