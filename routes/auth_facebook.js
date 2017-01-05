'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { camelizeKeys, decamelizeKeys } = require('humps');
const request = require('request-promise')

const router = express.Router();

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8000/auth_facebook/api/facebook/callback',
  profileFields: ['name', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    let fbProfile = null;

    request({
      url: `http://graph.facebook.com/${profile.id}/picture?type=large&redirect=false&width=480&height=480`
    })
    .then((res) => {
      fbProfile = JSON.parse(res);

      return knex('users')
      .where('facebook_id', profile.id)
      .first();
    })
    .then((user) => {
      if (user) {
        return user;
      }

      return knex('users')
      .insert(decamelizeKeys({
        firstName: profile.name.givenName,
        facebookId: profile.id
      }), '*');
    })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
  }));

router.get('/api/facebook', passport.authenticate('facebook', { session: false }));

router.get('/api/facebook/callback', passport.authenticate('facebook', {
  session: false,
  failureRedirect: '/'
}), (req, res) => {
  const expiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 60);
  const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  });

  res.cookie('token', token, {
    httpOnly: true,
    expires: expiry,
    secure: router.get('env') === 'production'
  });

  res.redirect('/');
});

module.exports = router;
