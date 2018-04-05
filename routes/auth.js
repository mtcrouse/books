'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const request = require('request-promise')

const router = express.Router();

router.get('/auth/signin', (req, res, next) => {
  let userId = 1;
  knex('users')
    .where('id', userId)
    .first()
    .then((row) => {
      if (!row) {
        return next(boom.create(400, `No user at id ${userId}`));
      }

      res.send(camelizeKeys(row));
    })
    .catch((err) => {
      next(err);
    });

  const expiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 60);
  const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
    expiresIn: '60d'
  });

  console.log(token);

  res.cookie('token', token, {
    httpOnly: true,
    expires: expiry,
    secure: router.get('env') === 'production'
  });

  res.redirect('/');
});

module.exports = router;
