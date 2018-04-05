'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('short'));

const auth = require('./routes/auth');
const users = require('./routes/users');
const token = require('./routes/token');
const books = require('./routes/books');
const tags = require('./routes/tags');

app.use(auth);
app.use(users);
app.use(token);
app.use(books);
app.use(tags);

app.use(express.static(path.join('src/client')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src/client', 'index.html'))
})

app.use((_req, res) => {
  res.sendStatus(404);
});

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  // eslint-disable-next-line no-console
  console.error(JSON.stringify(err, null, 2));

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.statusText);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;
