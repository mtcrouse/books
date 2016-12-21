/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('books').del()
    .then(() => {
      return knex('books').insert([{
        id: 1,
        title: 'Los detectives salvajes',
        subtitle: null,
        author: 'Roberto Bolaño',
        genre: 'fiction',
        language: 'Spanish',
        original_language: 'Spanish',
        publication_year: 1998,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 2,
        title: 'The Secret History',
        subtitle: null,
        author: 'Donna Tartt',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 1992,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 3,
        title: 'The Sun Also Rises',
        subtitle: null,
        author: 'Ernest Hemingway',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 1926,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));"
      );
    });
};
