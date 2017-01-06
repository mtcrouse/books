'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
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

router.get('/users', /*authorize,*/ (req, res, next) => {
  knex('users')
    .orderBy('id')
    .then((rows) => {
      const users = camelizeKeys(rows);

      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/currentuser', authorize, (req, res, next) => {
  const { userId } = req.token;

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
});

module.exports = router;
