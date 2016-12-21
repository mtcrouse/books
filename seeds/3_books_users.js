/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('books_users').del()
    .then(() => {
      return knex('books_users').insert([{
        id: 1,
        user_id: 1,
        book_id: 1,
        times_read: 2,
        date_read: '2011',
        shelf: 'read',
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 2,
        user_id: 1,
        book_id: 2,
        times_read: 1,
        date_read: '2015',
        shelf: 'read',
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 3,
        user_id: 2,
        book_id: 2,
        times_read: 3,
        date_read: '2014',
        shelf: 'read',
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('books_users_id_seq', (SELECT MAX(id) FROM books_users));"
      );
    });
};
