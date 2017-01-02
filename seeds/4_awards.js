/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('awards').del()
    .then(() => {
      return knex('awards').insert([{
        id: 1,
        award_name: 'Nebula Award for Best Novel',
        created_at: new Date('2016-12-07 16:17:12 UTC'),
        updated_at: new Date('2016-12-07 16:17:12 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('awards_id_seq', (SELECT MAX(id) FROM awards));"
      );
    });
};
