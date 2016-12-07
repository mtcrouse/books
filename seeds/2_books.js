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
        genre: '',
        language: 'Spanish',
        original_language: 'Spanish',
        publication_year: 1998,
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
