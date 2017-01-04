'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('awards', (table) => {
    table.increments();
    table.string('award_name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('awards');
};
