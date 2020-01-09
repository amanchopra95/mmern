const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

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
                type: Sequelize.STRING,
                validate: {
                    isNumeric: true
                }
            },
            userId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                validate: {
                    isUUID: 4
                }
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
            tableName: 'user_account', 
            modelName: 'user_account',
            hooks: {
                beforeSave: this.beforeSave
            }
        })
    }

    async beforeSave (user, options) {
        if (user.changed('password')) {
            let salt = await bcrypt.genSalt(8)
            const hashPassword = await bcrypt.hash(user.password, salt)
            user.password = hashPassword
        }
    }

    get firstName() {
        return this.getDataValue('firstName')
    }
    set firstName(value) {
        this.setDataValue('firstName', value)
    }
    get lastName() {
        return this.getDataValue('lastName')
    }
    set lastName(value) {
        this.setDataValue('lastName', value)
    }
    get phoneNo() {
        return this.phoneNo
    }
    set phoneNo(value) {
        this.setDataValue('phoneNo', value)
    }
    get userId() {
        return this.userId
    }
    get password() {
        return this.password
    }
    set password(value) {
        this.setDataValue('password', value)
    }
    get email() {
        return this.email
    }
    set email(value) {
        this.setDataValue('email', value)
    }

}

module.exports = User;

