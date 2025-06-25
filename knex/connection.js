import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const connection = knex({
  client: 'mysql2',
  connection: process.env.DATABASE_URL, // Tek satır yeterli
  migrations: {
    tableName: 'migrations',
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
});

export default connection;
