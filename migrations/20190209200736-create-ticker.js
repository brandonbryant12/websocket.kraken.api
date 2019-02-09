'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      channelID: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      basepair: {
        type: Sequelize.STRING
      },
      ask: {
        type: Sequelize.FLOAT
      },
      bid: {
        type: Sequelize.FLOAT
      },
      close: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.FLOAT
      },
      priceWeigtedVolume: {
        type: Sequelize.FLOAT
      },
      numberOfTrades: {
        type: Sequelize.INTEGER
      },
      low: {
        type: Sequelize.FLOAT
      },
      high: {
        type: Sequelize.FLOAT
      },
      open_last24hours: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Tickers');
  }
};