'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('subtitle').defaultTo(null);
    table.string('series').defaultTo(null);
    table.integer('volume').defaultTo(null);
    table.string('author').notNullable();
    table.string('genre').defaultTo(null);
    table.string('language').defaultTo(null);
    table.text('google_description').defaultTo(null);
    table.string('google_image').defaultTo(null);
    table.string('original_language').defaultTo(null);
    table.integer('publication_year').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
