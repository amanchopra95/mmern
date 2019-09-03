require('dotenv').config();

/**
 * Contains configuration of the app.
 * Database config 
 * Authentication secret keys
 */

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": "mmern",
    "host": process.env.DEV_DB_HOST,
    "dialect": process.env.DEV_DB_DIALECT,
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.PROD_DB_USERNAME,
    "password": process.env.PROD_DB_PASSWORD,
    "database": "mmern",
    "host": process.env.PROD_DB_HOST,
    "dialect": process.env.PROD_DB_DIALECT,
    "operatorsAliases": false
  }
};
