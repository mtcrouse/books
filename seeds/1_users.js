/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        username: 'metta',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 2,
        username: 'finley',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 3,
        username: 'oscar',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 4,
        username: 'squirrel',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 5,
        username: 'crystal',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 6,
        username: 'lucaya',
        hashed_password: '$2b$12$iNstTBuIfbUbTo2yVFPU6O8zdfndOcJQpMJwKmLL3dkbomrKjsYJG',
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
