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

        .createTable('conversations', tbl => {
            tbl.increments();
            tbl
            .string('recipient_first_name', 32)
            .notNullable()
            tbl
            .string('recipient_last_name', 32)
            tbl
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            tbl
            .string('recipient_phone', 10)
            tbl
            .string('topic', 64)
        })

        .createTable('messages', tbl => {
            tbl.increments();
            tbl
            .string('message', 255)
            .notNullable()
            // tbl
            // .integer('user_id')
            // .notNullable()
            // .references('id')
            // .inTable('users')
            // .onDelete('CASCADE')
            // .onUpdate('CASCADE')
            tbl
            .integer('conversation_id')
            .notNullable()
            .references('id')
            .inTable('conversations')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            tbl
            .string('sent_by', 9)
            .notNullable()
            tbl
            .string('time_sent', 128)
            .notNullable()
            tbl
            .bigint('message_timestamp', 64)
            .notNullable();
        })
        
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('messages')
        .dropTableIfExists('conversations')
        .dropTableIfExists('users')
  };
  
