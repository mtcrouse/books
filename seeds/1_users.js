/* eslint camelcase: 0, max-len: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'metta',
        email: 'mettacrouse@gmail.com',
        linkedin_token: 'AQVpBXBMKEvbHJ2cAvp9aW5bo6xZ32SsO-LckwcCbrDPf7MgMlNj7cCI8GRnkE7WnnidNwmSNywck2eLP7Nr6xTeHomLjQXiv5zXRRO7MjYSVMqql6fMM0hVRmnolWp7pKuMScmExV_DSsOeWIm5UuHcpCt4OjGo8s0Tixu6dwFZcm3N-ko',
        created_at: new Date('2016-11-25 16:17:12 UTC'),
        updated_at: new Date('2016-11-25 16:17:12 UTC')
      },
      {
        id: 2,
        first_name: 'finley',
        email: 'finley@gmail.com',
        linkedin_token: 'FINpBXBMKEvbHJ2cAvp9aW5bo6xZ32SsO-LckwcCbrDPf7MgMlNj7cCI8GRnkE7WnnidNwmSNywck2eLP7Nr6xTeHomLjQXiv5zXRRO7MjYSVMqql6fMM0hVRmnolWp7pKuMScmExV_DSsOeWIm5UuHcpCt4OjGo8s0Tixu6dwFZcm3N-ko',
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
