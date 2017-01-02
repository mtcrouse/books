/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('awards_books').del()
    .then(() => {
      return knex('awards_books').insert([{
        id: 1,
        book_id: 11,
        award_id: 1,
        award_year: 1966,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 2,
        title: 'Babel-17',
        subtitle: null,
        author: 'Samuel R. Delany',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1967,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 3,
        title: 'Flowers for Algernon',
        subtitle: null,
        author: 'Daniel Keyes',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1967,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 4,
        title: 'The Einstein Intersection',
        subtitle: null,
        author: 'Samuel R. Delany',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1968,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 5,
        title: 'Rite of Passage',
        subtitle: null,
        author: 'Alexei Panshin',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1969,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 6,
        title: 'The Left Hand of Darkness',
        subtitle: null,
        author: 'Ursula K. Le Guin',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1970,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 7,
        title: 'Ringworld',
        subtitle: null,
        author: 'Larry Niven',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1971,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 8,
        title: 'A Time of Changes',
        subtitle: null,
        author: 'Robert Silverberg',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1972,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 9,
        title: 'The Gods Themselves',
        subtitle: null,
        author: 'Isaac Asimov',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1973,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 10,
        title: 'Rendezvous with Rama',
        subtitle: null,
        author: 'Arthur C. Clarke',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1974,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 11,
        title: 'The Dispossessed',
        subtitle: null,
        author: 'Ursula K. Le Guin',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1975,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 12,
        title: 'The Forever War',
        subtitle: null,
        author: 'Joe Haldeman',
        genre: 'fiction',
        language: 'English',
        original_language: 'English',
        publication_year: null,
        award_year: 1976,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('awards_books_id_seq', (SELECT MAX(id) FROM awards_books));"
      );
    });
};
