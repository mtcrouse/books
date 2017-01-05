'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('email').defaultTo(null);
    table.string('linkedin_token').defaultTo(null);
    table.string('facebook_id').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
