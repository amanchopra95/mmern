const Sequelize = require('sequelize');

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
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
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

module.exports = User;

