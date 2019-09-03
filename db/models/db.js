const Sequelize = require('sequelize');
const config = require('../config/config');
const fs = require("fs");
const path = require('path');
const basename = path.basename(__filename);

let db = {};
let models = {}

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

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        models[model.name] = model.init(sequelize);
    })

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models); 
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

