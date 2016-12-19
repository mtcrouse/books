'use strict';

// process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const supertest = require('supertest');

suite('book routes', () => {
  test('GET /books/allbooks', (done) => {
    supertest(app)
      .get('/books/allbooks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done);
  });
});
