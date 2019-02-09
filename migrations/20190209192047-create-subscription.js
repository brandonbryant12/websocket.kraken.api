'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      channelID: {
        type: Sequelize.INTEGER
      },
      event: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      pair: {
        type: Sequelize.STRING
      },
      reqID: {
        type: Sequelize.INTEGER
      },
      subscriptionType: {
        type: Sequelize.STRING
      },
      subscriptionInterval: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subscriptions');
  }
};