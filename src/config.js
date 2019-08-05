require('dotenv').config();

/**
 * Contains configuration of the app.
 * Database config 
 * Authentication secret keys
 */

module.exports = {
    development: {
        db: {
            username: process.env.DEV_DB_USERNAME,
            password: process.env.DEV_DB_PASSWORD,
            host: process.env.DEV_DB_HOST,
            port: process.env.DEV_DB_PORT,
            dialect: process.env.DEV_DB_DIALECT,
        }
    },
    production: {
        db: {
            username: process.env.PROD_DB_USERNAME,
            password: process.env.PROD_DB_PASSWORD,
            host: process.env.PROD_DB_HOST,
            port: process.env.PROD_DB_PORT,
            dialect: process.env.PROD_DB_DIALECT,
        }
    }
}