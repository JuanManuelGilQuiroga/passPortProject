const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../models/User');

module.exports = function(passport) {

  passport.use(new DiscordStrategy({
    clientID: '1284683290774605934',
    clientSecret: 'OCFrpAoLRqkNxVn406ThABTsXoxfM1GL',
    callbackURL: '/auth/discord/callback',
    scope: ['identify', 'email']
  }, async (accessToken, refreshToken, profile, done) => {

    console.log(profile)
    const user = await User.findOne({ oauthID: profile.id });
    if (user) {
      return done(null, user);
    }
    const newUser = await new User({
      oauthID: profile.id,
      name: profile.username,
      email: profile.email,
      picture: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : ''
    }).save();
    done(null, newUser);


  }));

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser(async (id, done) => {
//     const user = await User.findById(id);
//     done(null, user);
//   });
};