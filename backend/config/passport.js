const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const User = require('../models/userModel.js')
const passport = require('passport');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
require('dotenv').config()
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log(jwt_payload);

    User.findOne({id: jwt_payload.id}, function(err, user) {
        console.log("finding use");
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));