/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('dates', (table) => {
    table.increments('id').primary()
    table.integer('dateDigit')
    table.string('dayOfWeek')
    table.string('dateMonth')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dates')
}
