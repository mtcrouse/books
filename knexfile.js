'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/books_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/books_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
