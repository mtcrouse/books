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
        book_id: 12,
        award_id: 1,
        award_year: 1967,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 3,
        book_id: 13,
        award_id: 1,
        award_year: 1967,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 4,
        book_id: 14,
        award_id: 1,
        award_year: 1968,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 5,
        book_id: 15,
        award_id: 1,
        award_year: 1969,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 6,
        book_id: 16,
        award_id: 1,
        award_year: 1970,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 7,
        book_id: 17,
        award_id: 1,
        award_year: 1971,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 8,
        book_id: 18,
        award_id: 1,
        award_year: 1972,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 9,
        book_id: 19,
        award_id: 1,
        award_year: 1973,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 10,
        book_id: 20,
        award_id: 1,
        award_year: 1974,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 11,
        book_id: 21,
        award_id: 1,
        award_year: 1975,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 12,
        book_id: 22,
        award_id: 1,
        award_year: 1976,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 12,
        book_id: 22,
        award_id: 1,
        award_year: 1976,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 13,
        book_id: 23,
        award_id: 1,
        award_year: 1977,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 14,
        book_id: 24,
        award_id: 1,
        award_year: 1978,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 15,
        book_id: 25,
        award_id: 1,
        award_year: 1979,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 16,
        book_id: 26,
        award_id: 1,
        award_year: 1980,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 17,
        book_id: 27,
        award_id: 1,
        award_year: 1981,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 18,
        book_id: 28,
        award_id: 1,
        award_year: 1982,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 19,
        book_id: 29,
        award_id: 1,
        award_year: 1983,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 20,
        book_id: 30,
        award_id: 1,
        award_year: 1984,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 21,
        book_id: 31,
        award_id: 1,
        award_year: 1985,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 22,
        book_id: 32,
        award_id: 1,
        award_year: 1986,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 23,
        book_id: 33,
        award_id: 1,
        award_year: 1987,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 24,
        book_id: 34,
        award_id: 1,
        award_year: 1988,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 25,
        book_id: 35,
        award_id: 1,
        award_year: 1989,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 26,
        book_id: 36,
        award_id: 1,
        award_year: 1990,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 27,
        book_id: 37,
        award_id: 1,
        award_year: 1991,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 28,
        book_id: 38,
        award_id: 1,
        award_year: 1992,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 29,
        book_id: 39,
        award_id: 1,
        award_year: 1993,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 30,
        book_id: 40,
        award_id: 1,
        award_year: 1994,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 31,
        book_id: 41,
        award_id: 1,
        award_year: 1995,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 32,
        book_id: 42,
        award_id: 1,
        award_year: 1996,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 33,
        book_id: 43,
        award_id: 1,
        award_year: 1997,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 34,
        book_id: 44,
        award_id: 1,
        award_year: 1998,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 35,
        book_id: 45,
        award_id: 1,
        award_year: 1999,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 36,
        book_id: 46,
        award_id: 1,
        award_year: 2000,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 37,
        book_id: 47,
        award_id: 1,
        award_year: 2001,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 38,
        book_id: 48,
        award_id: 1,
        award_year: 2002,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 39,
        book_id: 49,
        award_id: 1,
        award_year: 2003,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 40,
        book_id: 50,
        award_id: 1,
        award_year: 2004,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 41,
        book_id: 51,
        award_id: 1,
        award_year: 2005,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 42,
        book_id: 52,
        award_id: 1,
        award_year: 2006,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 43,
        book_id: 53,
        award_id: 1,
        award_year: 2007,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 44,
        book_id: 54,
        award_id: 1,
        award_year: 2008,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 45,
        book_id: 55,
        award_id: 1,
        award_year: 2009,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 46,
        book_id: 56,
        award_id: 1,
        award_year: 2010,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 47,
        book_id: 57,
        award_id: 1,
        award_year: 2011,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 48,
        book_id: 58,
        award_id: 1,
        award_year: 2012,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 49,
        book_id: 59,
        award_id: 1,
        award_year: 2013,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 50,
        book_id: 60,
        award_id: 1,
        award_year: 2014,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 51,
        book_id: 61,
        award_id: 1,
        award_year: 2015,
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      },
      {
        id: 52,
        book_id: 62,
        award_id: 1,
        award_year: 2016,
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
