import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const setting = {
  development: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL_DEV,
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    pool: {
      min: 0,
      max: 10,
      acquireTimeoutMillis: 20000,
      idleTimeoutMillis: 30000, // 30 saniyelik idle sonra bağlantıyı yenile
      reapIntervalMillis: 1000,
      createTimeoutMillis: 30000,
      createRetryIntervalMillis: 200
    }
  },

  production: {
    client: 'mysql2',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    pool: {
      min: 0,
      max: 10,
      acquireTimeoutMillis: 20000,
      idleTimeoutMillis: 30000, // 30 saniyelik idle sonra bağlantıyı yenile
      reapIntervalMillis: 1000,
      createTimeoutMillis: 30000,
      createRetryIntervalMillis: 200
    }
  }
}
//BAĞLANTIYI AYARLA DEV MI PROD MU 
var connection;
if ( process.env.MODE == 'DEV') {
  connection = knex(setting.development);  
} else {
  connection = knex(setting.production);
}



export default connection;

