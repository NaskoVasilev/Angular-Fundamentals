const jwt = require('jsonwebtoken')
const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const encryption = require('../util/encryption');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim()
  }

  User.findOne({email: user.email}).then((savedUser) => {
    if (!savedUser) {
      const error = new Error('Incorrect email or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }

    const isMatch = savedUser.hashedPass === encryption.generateHashedPassword(savedUser.salt, password);

    if (!isMatch) {
      const error = new Error('Incorrect email or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }

    const payload = {
      sub: savedUser.id
    }

    // create a token string
    const token = jwt.sign(payload, 's0m3 r4nd0m str1ng');
    const isAdmin = savedUser.roles.indexOf('Admin') != -1;
    const data = {
      name: savedUser.name,
      isAdmin
    }

    return done(null, token, data)
  })
})
