import dotenv from 'dotenv';
dotenv.config();

export default {
  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
// This configuration is for a production environment using MySQL.
// It uses environment variables to set the database connection URL.