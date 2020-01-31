
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      port: 5432,
      user: 'postgres',
      password:  'postgres' 
    },
    useNullAsDefault: true,
    // pool: {
    //   afterCreate: (conn, done) => {
    //   conn.run('PRAGMA foreign_keys = ON', done)}
    //   },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds',
    }
  },
  
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      useNullAsDefault: true,
      // pool: {
      //   afterCreate: (conn, done) => {
      //   conn.run('PRAGMA foreign_keys = ON', done)}
      //   },
      migrations: {
        directory: './data/migrations',
        tableName: 'knex_migrations'
      },
      seeds: {
        directory: './data/seeds',
      }
    }
};
