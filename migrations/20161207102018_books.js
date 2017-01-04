'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('subtitle');
    table.string('series').defaultTo(null);
    table.integer('volume').defaultTo(null);
    table.string('author');
    table.string('genre');
    table.string('language');
    table.string('original_language');
    table.integer('publication_year');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
