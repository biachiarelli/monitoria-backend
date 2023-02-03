/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.string('id').primary()
        table.string('name').notNull()
        table.string('course').notNull()
        table.string('email').notNull()
        table.string('password').notNull()
        table.string('role').notNull()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user')
};
