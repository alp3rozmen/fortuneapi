// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  
  development: {
    client: 'mysql',
    connection: {
      secureAuth: false,
      host : 'mysql.railway.internal',
      port : '3306',
      user : 'root',
      password : 'MHlGemkdsDLHYjhMJJrgXndJLIRicaoV',
      database : 'fortuneteller'
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

