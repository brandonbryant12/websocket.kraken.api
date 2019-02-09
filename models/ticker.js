'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticker = sequelize.define('Ticker', {
    channelID: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    basepair: DataTypes.STRING,
    ask: DataTypes.FLOAT,
    bid: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    priceWeigtedVolume: DataTypes.FLOAT,
    numberOfTrades: DataTypes.INTEGER,
    low: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    open_last24hours: DataTypes.FLOAT
  }, {});
  Ticker.associate = function(models) {
    // associations can be defined here
  };
  return Ticker;
};