'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

// const ev = require('express-validation');
// const validations = require('../validations/books');

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

// Get all tags of a book
router.get('/tags/:bookId', (req, res, next) => {
  const { bookId } = req.params;

  knex('tags')
    .where('book_id', bookId)
    .then((rows) => {
      const tags = camelizeKeys(rows);

      res.send(tags);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/tags', authorize, (req, res, next) => {
  const { bookId, tag } = req.body;
  const { userId } = req.params;
  const insertTag = { bookId, userId, tag };

  knex('tags')
    .insert(decamelizeKeys(insertTag))
    .then((rows) => {
      const tags = camelizeKeys(rows);
      res.send(tags);
    })
    .catch((err) => {
      next(err);
    })
});

module.exports = router;
