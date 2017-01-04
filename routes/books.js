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

router.get('/books/allbooks', (req, res, next) => {
  knex('books')
    .orderBy('id')
    .then((rows) => {
      const books = camelizeKeys(rows);

      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/books/awards/:awardId', (req, res, next) => {
  const { awardId } = req.params;

  knex('awards_books')
    .where('award_id', awardId)
    .innerJoin('books', 'books.id', 'awards_books.book_id')
    .leftJoin('books_users', 'books.id', 'books_users.book_id')
    .orderBy('books.id')
    .then((rows) => {
      const books = camelizeKeys(rows);

      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/books', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('books_users')
    .where('user_id', userId)
    .innerJoin('books', 'books.id', 'books_users.book_id')
    .then((rows) => {
      const books = camelizeKeys(rows);

      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/books', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { title, subtitle, author, genre, language, originalLanguage, publicationYear } = req.body;
  const insertBook = {
    title, subtitle, author, genre, language, originalLanguage, publicationYear
  }
  const { shelf } = req.body;

  knex('books')
    .where('title', title)
    .first()
    // .then((row) => {
    //   if (row) {
    //     return next(boom.create(400, 'Book already exists'));
    //   }
    // })
    .then(() => {
      return knex('books').insert(decamelizeKeys(insertBook), '*');
    })
    .then((rows) => {
      const bookId = camelizeKeys(rows)[0].id;
      const insertUserBook = {
        bookId,
        userId,
        dateRead: null,
        shelf
      }

      return knex('books_users').insert(decamelizeKeys(insertUserBook), '*');
    })
    .then((rows) => {

      res.send('book');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
