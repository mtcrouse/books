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
      },
      {
        id: 4,
        title: 'The Girls',
        subtitle: null,
        author: 'Emma Cline',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 2016,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 5,
        title: 'The Amazing Adventures of Kavalier and Clay',
        subtitle: null,
        author: 'Michael Chabon',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 2000,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 6,
        title: 'Cathedral',
        subtitle: null,
        author: 'Raymond Chandler',
        genre: 'short story',
        language: 'English',
        original_language: 'English',
        publication_year: 1983,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 7,
        title: 'Guns, Germs, and Steel',
        subtitle: 'The Fates of Human Societies',
        author: 'Jared Diamond',
        genre: 'non-fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 1997,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 8,
        title: 'War and Peace',
        subtitle: null,
        author: 'Leo Tolstoy',
        genre: 'fiction',
        language: 'English',
        original_language: 'Russian',
        publication_year: 1869,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 9,
        title: 'The Giving Tree',
        subtitle: null,
        author: 'Shel Silverstein',
        genre: 'juvenile fiction',
        language: 'English',
        original_language: 'English',
        publication_year: 1964,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 10,
        title: 'Philosophical Investigations',
        subtitle: null,
        author: 'Ludwig Wittgenstein',
        genre: 'philosophy',
        language: 'English',
        original_language: 'German',
        publication_year: 1953,
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
