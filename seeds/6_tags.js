/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([{
        id: 1,
        tag: 'space',
        book_id: 11,
        user_id: 3,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 2,
        tag: 'space',
        book_id: 11,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 3,
        tag: 'space',
        book_id: 11,
        user_id: 5,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 4,
        tag: 'space',
        book_id: 32,
        user_id: 5,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 5,
        tag: 'space',
        book_id: 40,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 6,
        tag: 'fantasy',
        book_id: 65,
        user_id: 6,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 7,
        tag: 'fantasy',
        book_id: 65,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 8,
        tag: 'fantasy',
        book_id: 67,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 9,
        tag: 'george r.r. martin',
        book_id: 67,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 10,
        tag: 'george r.r. martin',
        book_id: 68,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 11,
        tag: 'george r.r. martin',
        book_id: 69,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 12,
        tag: 'george r.r. martin',
        book_id: 70,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 13,
        tag: 'george r.r. martin',
        book_id: 71,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 14,
        tag: 'lord of the rings',
        book_id: 65,
        user_id: 3,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 15,
        tag: 'lord of the rings',
        book_id: 64,
        user_id: 4,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 16,
        tag: 'lord of the rings',
        book_id: 63,
        user_id: 2,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));"
      );
    });
};
