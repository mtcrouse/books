'use strict';

const boom = require('boom');
const express = require('express');
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

router.get('/books', (req, res, next) => {
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

// router.post('/books', (req, res, next) => {
//   const { title, subtitle, author, genre, language, original_language, publication_year } = req.body;
// 
//       knex('books')
//         .where('email', email)
//         .first()
//         .then((row) => {
//           if (row) {
//             return next(boom.create(400, 'Email already exists'));
//           }
//         })
//         .then(() => {
//           return knex('users').insert(decamelizeKeys(insertUser), '*');
//         });
//     })
//     .then((books) => {
//       const book = camelizeKeys(rows[0]);
//
//       res.send(book);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
