'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('awards_books', (table) => {
    table.increments();
    table.integer('award_id')
      .notNullable()
      .references('id')
      .inTable('awards')
      .onDelete('CASCADE')
      .index();
    table.integer('book_id')
      .notNullable()
      .references('id')
      .inTable('books')
      .onDelete('CASCADE')
      .index();
    table.integer('award_year');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('awards_books');
};
