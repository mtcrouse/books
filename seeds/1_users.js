/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'metta2',
        email: 'mettacrouse2@gmail.com',
        linkedin_token: 'AQX6vt2qc1LleDcOupuFbvT5Tka1NXaeowreG4ympJta6qDwUlvGruOCcQVPRYyy74n-Lh2n_8sfg0q1gBAtJMwopEv3p0rfMiGswSBeYtvDjEUf8j15N2Fl-BEAdzCxRBrTI7wN8S5YUKgDP2pDKVzA4x1CayjgcgR8Kcsy_C_qwBHxMyY',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
