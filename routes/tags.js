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
router.get('/tags/book/:bookId', (req, res, next) => {
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

// Get all books with a specific tag
router.get('/tags/tag/:tag', authorize, (req, res, next) => {
  const { tag } = req.params;
  const { userId } = req.token;

  knex('tags')
    .where('tag', tag)
    .innerJoin('books', 'books.id', 'tags.book_id')
    .leftJoin('books_users', function() {
      this
      .on('books_users.book_id', 'books.id')
      .on('books_users.user_id', userId)
    })
    .select('author', 'title', 'tag', 'tags.book_id', 'shelf', 'tags.user_id', 'publication_year', 'google_description', 'google_image')
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
  const { userId } = req.token;
  const insertTag = { bookId, userId, tag };

  knex('tags')
    .where('user_id', userId)
    .where('book_id', bookId)
    .where('tag', tag)
    .first()
    .then((row) => {
      if (row) {
        return next(boom.create(400, 'Tag already exists from user'));
      }
    })
    .then(() => {
      knex('tags')
        .insert(decamelizeKeys(insertTag))
        .then((rows) => {
          const tags = camelizeKeys(rows);
          res.send(tags);
        })
        .catch((err) => {
          next(err);
        });
    });
});

module.exports = router;
