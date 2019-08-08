const Sequelize = require('sequelize');
const config = require('./config/config');

let db = {};

if (process.env.NODE_ENV === 'production') {
    db = config.production;
} else {
    db = config.development;
}

const sequelize = new Sequelize('mmern', db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
.then(() => console.info("Connection established."))
.catch((err) => console.error("Connection not established, ", err));

module.export = sequelize;