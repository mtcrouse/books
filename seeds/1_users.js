/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'metta',
        email: 'mettacrouse@gmail.com',
        facebook_id: '122974351538198',
        facebook_token: 'EAAKLpHw6ef0BANfOc9d9S88vRdg87dxZCpxaMwCZByFXYZCr0GtHnk4DV4pk0ZCxOVDgPxexhKGZC5mLZBkgcOWIrX0L00YnkOa6RRYLZBFAmBZA3tNFkGFkx2yQDyr4tHG5ZATNvzVhSvSt3nqN41P9qtu4IBZAZAlQ6Qbd9dRe7M8MQZDZD',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 2,
        first_name: 'finley',
        email: 'finley@gmail.com',
        facebook_id: '1',
        facebook_token: '2',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 3,
        first_name: 'oscar',
        email: 'oscar@gmail.com',
        facebook_id: '123',
        facebook_token: '234',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 4,
        first_name: 'squirrel',
        email: 'squirrel@gmail.com',
        facebook_id: '17',
        facebook_token: '27',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 5,
        first_name: 'crystal',
        email: 'crystal@gmail.com',
        facebook_id: '183',
        facebook_token: '220',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 6,
        first_name: 'lucaya',
        email: 'lucaya@gmail.com',
        facebook_id: '1392',
        facebook_token: '2201',
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
