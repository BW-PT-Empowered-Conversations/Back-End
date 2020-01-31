exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl
            .string('username', 255)
            .notNullable()
            .unique();
            tbl
            .string('password', 255)
            .notNullable();
            tbl
            .string('first_name', 32)
            .notNullable();
            tbl.string('last_name', 32)
            .notNullable();
            tbl.string('user_phone', 10)
            .notNullable();
            tbl.string('email', 128)
            .notNullable()
            .unique()
        })
        .createTable('messages', tbl => {
            tbl.increments();
            tbl
            .string('message', 255)
            .notNullable()
            tbl
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('messages')
        .dropTableIfExists('users')
  };
  
