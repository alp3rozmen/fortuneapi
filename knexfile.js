// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  
  development: {
    client: 'mysql',
    connection: {
      secureAuth: false,
      host : process.env.mysql_host,
      port : process.env.mysql_port,
      user : process.env.mysql_user,
      password : process.env.mysql_password,
      database : process.env.mysql_database
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};

