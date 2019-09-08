'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_account", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_account");
  }
};
