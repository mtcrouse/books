'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const { camelizeKeys, decamelizeKeys } = require('humps');
const request = require('request-promise')

const router = express.Router();

const strategy = new OAuth2Strategy({
  authorizationURL: 'https://www.linkedin.com/oauth/v2/authorization',
  scope: ['r_basicprofile', 'r_emailaddress'],
  tokenURL: 'https://www.linkedin.com/oauth/v2/accessToken',
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth_linkedin/linkedin/callback'
}, (accessToken, refreshToken, profile, done) => {
  let liProfile = null;

  request({
    url: 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address)?format=json',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then((linkedInProfile) => {
    liProfile = JSON.parse(linkedInProfile)

    return knex('users')
      .where('email', liProfile.emailAddress)
      .first();
  })
  .then((user) => {
    if (user) {
      return camelizeKeys(user);
    }

    return knex('users')
      .insert(decamelizeKeys({
        firstName: liProfile.firstName,
        email: liProfile.emailAddress,
        linkedinToken: accessToken,
      }), '*');
    })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

passport.use(strategy);

router.get('/linkedin', passport.authenticate('oauth2', { session: false }));

router.get('/linkedin/callback', passport.authenticate('oauth2', {
  session: false,
  failureRedirect: '/'
}), (req, res) => {
  const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
  const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: '3h'
  });

  res.cookie('token', token, {
    httpOnly: true,
    expiresIn: expiry,
    secure: router.get('env') === 'production'
  });

  // Successful authentication, redirect home.
  res.redirect('/');
});

module.exports = router;
