'use strict';

const boom = require('boom');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const request = require('request-promise');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.verify = false;

      return next(boom.create(401, 'Unauthorized'));
    }

    res.verify = true;
    req.token = decoded;

    next();
  });
};

router.post('/auth/signin', (req, res, next) => {
  const { username, password } = req.body;

  let user;

  knex('users')
    .where('username', username)
    .first()
    .then((row) => {
      if (!row) {
        return next(boom.create(400, 'User not found'));
      }

      user = camelizeKeys(row);

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then((correctPassword) => {
      if (!correctPassword) {
        return next(boom.create(400, 'Bad password'));
      }

      delete user.hashedPassword;

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '60d'
      });

      res.cookie('token', token, {
        httpOnly: true,
        secure: router.get('env') === 'production'
      });

      res.redirect('/search');
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/auth/newuser', (req, res, next) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 12)
    .then((hashedPassword) => {
      const insertUser = { username, hashedPassword };

      return knex('users')
        .where('username', username)
        .first()
        .then((row) => {
          if (row) {
            return next(boom.create(400, 'Username already exists'));
          }
        })
        .then(() => {
          return knex('users').insert(decamelizeKeys(insertUser), '*');
        });
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
