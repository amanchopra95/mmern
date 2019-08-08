const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({

        }, {
            sequelize,
            modelName: 'user_posts'
        })
    }
}

module.exports = Post;