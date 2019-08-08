const Sequelize = require('sequelize');
const db = require('../db');

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phoneNo: {
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.UUIDV4
            },
            password: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                validate: {
                    isEmail: true
                }
            },
        },{
            sequelize,
            modelName: 'user_account'
        })
    }
}

/* User.sync()
.then(() => console.info("Connection established with Database"))
.catch((err) => console.error("Couldn't establish connection.", err)) */

module.exports = User;

