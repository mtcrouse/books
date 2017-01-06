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

// Get all books regardless of user
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

// Get all books from a particular list
router.get('/books/awards/:awardId', authorize, (req, res, next) => {
  const { awardId } = req.params;
  const { userId } = req.token;

  if (awardId == 1) {
    knex('awards_books')
      .where('award_id', awardId)
      .innerJoin('books', 'books.id', 'awards_books.book_id')
      .select('*')
      .leftJoin('books_users', function() {
        this
        .on('books_users.book_id', 'books.id')
        .on('books_users.user_id', userId)
      })
      .select('author', 'title', 'award_year', 'awards_books.book_id', 'shelf', 'date_read')
      .orderBy('award_year', 'ASC')
      .then((rows) => {
        const books = camelizeKeys(rows);

        res.send(books);
      })
      .catch((err) => {
        next(err);
      });
  } else if (awardId == 2) {
    knex('awards_books')
      .where('award_id', awardId)
      .innerJoin('books', 'books.id', 'awards_books.book_id')
      .select('*')
      .leftJoin('books_users', function() {
        this
        .on('books_users.book_id', 'books.id')
        .on('books_users.user_id', userId)
      })
      .select('author', 'title', 'award_year', 'awards_books.book_id', 'shelf', 'date_read')
      .orderBy('rank', 'ASC')
      .then((rows) => {
        const books = camelizeKeys(rows);

        res.send(books);
      })
      .catch((err) => {
        next(err);
      });
  }
});

// Get all books from the current user
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

// Post a book that is not already in the books table
router.post('/books', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { title, subtitle, author, genre, language, originalLanguage, year } = req.body;
  const { shelf } = req.body;
  let insertBook = { title, author };

  if (subtitle) {
    insertBook.subtitle = subtitle;
  }

  if (genre) {
    insertBook.genre = genre;
  }

  if (language) {
    insertBook.language = language;
    insertBook.originalLanguage = language;
  }

  if (year) {
    insertBook.publicationYear = year;
  }

  knex('books')
    .where('title', title)
    .where('author', author)
    .first()
    .then((row) => {
      if (row) {
        return next(boom.create(400, 'Book already exists'));
      }
    })
    .then(() => {
      knex('books').insert(decamelizeKeys(insertBook), '*')
        .then((book) => {
          console.log(book);
          const insertUserBook = {
            bookId: book[0].id,
            userId,
            dateRead: null,
            shelf
          }

          console.log(insertUserBook);

          return knex('books_users').insert(decamelizeKeys(insertUserBook), '*')
            .then(res => {
              console.log('posted to books_users');
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
});

// Post a book that is ALREADY in the books table to the books_users table
router.post('/books/books_users', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { bookId } = req.body;
  const { shelf } = req.body;
  const insertUserBook = {
    bookId,
    userId,
    dateRead: null,
    shelf
  }

  knex('books_users')
    .insert(decamelizeKeys(insertUserBook), '*')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
});

// Route to patch shelf
router.patch('/books/:bookId', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { bookId } = req.params;
  const { shelf } = req.body;

  knex('books_users')
    .where('user_id', userId)
    .where('book_id', bookId)
    .update({
      shelf
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

// Delete a book from books_users
router.delete('/books/books_users/:bookId', authorize, (req, res, next) => {
  const { userId } = req.token;
  const { bookId } = req.params;

  knex('books_users')
    .where('user_id', userId)
    .where('book_id', bookId)
    .select('*')
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
