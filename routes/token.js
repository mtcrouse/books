'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, _decoded) => {
    if (err) {
      res.verify = false;
    }
    else {
      res.verify = true;
    }

    next();
  });
};

// Check if logged in
router.get('/token', authorize, (req, res, _next) => {
  res.send(res.verify);
});

// Log out
router.delete('/token', (req, res, _next) => {
  res.clearCookie('token');
  res.status(200);
  res.send('true');
});

module.exports = router;
