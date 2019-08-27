const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT
            }
        }, {
            sequelize,
            modelName: 'user_posts'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'user'
        });
    }
}

module.exports = Post; 