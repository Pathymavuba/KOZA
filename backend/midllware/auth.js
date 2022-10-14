const passport = require('passport');

//vérification du tokrn et sécurité des routes

module.exports = passport.authenticate('jwt',{session:false})